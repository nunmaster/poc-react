import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, Toast } from 'native-base';
import { NativeModules, Platform } from 'react-native';

export default class extends Component {

  state = {
    contact: ''
  };

  showVolume = () => {
    const OutputVolume = NativeModules.OutputVolume;
    OutputVolume.get().then(volume => alert(volume));
  }
  showToast = () => {
    const ToastModule = NativeModules.ToastModule;
    ToastModule.show('This is Native Module demo', ToastModule.SHORT);
  }
  render() {
    return (
      <Content>
        {Platform.OS === 'ios' ?
          <Button onPress={this.showVolume}>
            <Text> iOS get volume </Text>
          </Button>
          :
          <Button onPress={this.showToast}>
            <Text> Android show toast </Text>
          </Button>
        }

      </Content>
    );
  }
}
