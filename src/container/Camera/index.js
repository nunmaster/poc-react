import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Icon
} from 'native-base';
import Camera from 'react-native-camera';
import VideoPlayer from 'react-native-video-player';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  topOverlay: {
    top: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomOverlay: {
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 40,
  },
  typeButton: {
    padding: 5,
  },
  flashButton: {
    padding: 5,
  },
  buttonsSpace: {
    width: 10,
  },
  refresh: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  }
});

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.camera = null;

    this.state = {
      camera: {
        aspect: Camera.constants.Aspect.fill,
        captureTarget: Camera.constants.CaptureTarget.disk,
        type: Camera.constants.Type.back,
        orientation: Camera.constants.Orientation.auto,
        flashMode: Camera.constants.FlashMode.auto,
      },
      isRecording: false
    };
  }

  takePicture = () => {
    if (this.camera) {
      this.camera.capture()
        .then((data) => {
          console.log(data);
          this.setState({
            imageSource: { uri: data.path }
          });
        })
        .catch(err => console.error(err));
    }
  }

  startRecording = () => {
    if (this.camera) {
      this.camera.capture({ mode: Camera.constants.CaptureMode.video })
        .then((data) => {
          console.log(data);
          this.setState({
            videoSource: { uri: data.path }
          });
        })
        .catch(err => console.error(err));
      this.setState({
        isRecording: true
      });
    }
  }

  stopRecording = () => {
    if (this.camera) {
      this.camera.stopCapture();
      this.setState({
        isRecording: false
      });
    }
  }

  switchType = () => {
    let newType;
    const { back, front } = Camera.constants.Type;

    if (this.state.camera.type === back) {
      newType = front;
    } else if (this.state.camera.type === front) {
      newType = back;
    }

    this.setState({
      camera: {
        ...this.state.camera,
        type: newType,
      },
    });
  }

  get typeIcon() {
    let icon;
    const { back, front } = Camera.constants.Type;

    if (this.state.camera.type === back) {
      icon = 'camera';
    } else if (this.state.camera.type === front) {
      icon = 'laptop';
    }

    return icon;
  }

  switchFlash = () => {
    let newFlashMode;
    const { auto, on, off } = Camera.constants.FlashMode;

    if (this.state.camera.flashMode === auto) {
      newFlashMode = on;
    } else if (this.state.camera.flashMode === on) {
      newFlashMode = off;
    } else if (this.state.camera.flashMode === off) {
      newFlashMode = auto;
    }

    this.setState({
      camera: {
        ...this.state.camera,
        flashMode: newFlashMode,
      },
    });
  }

  get flashIcon() {
    let icon;
    const { auto, on, off } = Camera.constants.FlashMode;

    if (this.state.camera.flashMode === auto) {
      icon = 'flash';
    } else if (this.state.camera.flashMode === on) {
      icon = 'flame';
    } else if (this.state.camera.flashMode === off) {
      icon = 'close';
    }

    return icon;
  }

  render() {
    return (
      <View style={styles.container}>

        {!this.state.imageSource && !this.state.videoSource ?
          <View style={{ flex: 1 }}>
            <Camera
              ref={(cam) => {
                this.camera = cam;
              }}
              style={styles.preview}
              aspect={this.state.camera.aspect}
              captureTarget={this.state.camera.captureTarget}
              type={this.state.camera.type}
              flashMode={this.state.camera.flashMode}
              onFocusChanged={() => { }}
              onZoomChanged={() => { }}
              defaultTouchToFocus
              mirrorImage={false}
            />
            <View style={[styles.overlay, styles.topOverlay]}>
              <TouchableOpacity
                style={styles.typeButton}
                onPress={this.switchType}
              >

                <Icon name={this.typeIcon} color='white' fontSize={30} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.flashButton}
                onPress={this.switchFlash}
              >

                <Icon name={this.flashIcon} color='white' fontSize={30} />
              </TouchableOpacity>
            </View>
            <View style={[styles.overlay, styles.bottomOverlay]}>
              {
                !this.state.isRecording
                  ?
                  <TouchableOpacity
                    style={styles.captureButton}
                    onPress={this.takePicture}
                  >
                    <Icon name='camera' color='white' fontSize={30} />
                  </TouchableOpacity>
                  :
                  null
              }
              <View style={styles.buttonsSpace} />
              {
                !this.state.isRecording
                  ?
                  <TouchableOpacity
                    style={styles.captureButton}
                    onPress={this.startRecording}
                  >
                    <Icon name='film' color='white' fontSize={30} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity
                    style={styles.captureButton}
                    onPress={this.stopRecording}
                  >
                    <Icon name='pause' color='white' fontSize={30} />
                  </TouchableOpacity>
              }
            </View>
          </View>
          :
          <View style={{ flex: 1 }}>
            {
              this.state.imageSource ? <Image
                style={{ flex: 1 }}
                source={this.state.imageSource}
              />
                :
                this.state.videoSource ?
                  <VideoPlayer
                    autoplay={false}
                    loop={false}
                    video={this.state.videoSource}
                  />
                  : null
            }
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  imageSource: null,
                  videoSource: null,
                });
              }}
              style={styles.refresh}
            >
              <Icon name='refresh' color='white' fontSize={30} />
            </TouchableOpacity>
          </View>
        }
      </View>
    );
  }
}
