import React, { Component } from 'react';
import {
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import Spinner from 'react-native-spinkit';

export default class Loading extends Component {
  state = {
    index: 0,
    types: ['CircleFlip', 'Bounce', 'Wave', 'WanderingCubes', 'Pulse',
      'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress',
      'FadingCircle', 'FadingCircleAlt', 'Arc', 'ArcAlt'],
    size: 100,
    color: '#FFFFFF',
    isVisible: true
  }

  next = () => {
    if (this.state.index++ >= this.state.types.length) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: this.state.index++ });
    }
  }

  increaseSize = () => {
    this.setState({ size: this.state.size + 10 });
  }

  changeColor = () => {
    this.setState({ color: `#${Math.floor(Math.random() * 16777215).toString(16)}` });
  }
  render() {
    const type = this.state.types[this.state.index];
    return (
      <ScrollView style={{ backgroundColor: '#cccccc' }}>
        <View style={styles.horizontal}>
          <ActivityIndicator color="#0000ff" />
          <ActivityIndicator color="#aa00aa" />
          <ActivityIndicator color="#aa3300" />
          <ActivityIndicator color="#00aa00" />
        </View>
        <View style={styles.horizontal}>
          <ActivityIndicator
            size="large"
            color="#0000ff"
          />
          <ActivityIndicator
            size="large"
            color="#aa00aa"
          />
          <ActivityIndicator
            size="large"
            color="#aa3300"
          />
          <ActivityIndicator
            size="large"
            color="#00aa00"
          />
        </View>
        <ActivityIndicator
          style={[styles.centering, { transform: [{ scale: 1.5 }] }]}
          size="large"
        />
        <View style={styles.container}>
          <Spinner
            style={styles.spinner} isVisible={this.state.isVisible}
            size={this.state.size} type={type} color={this.state.color}
          />

          <Text style={styles.text}>Type: {type}</Text>

          <TouchableOpacity style={styles.btn} onPress={this.next}>
            <Text style={styles.text}>Next</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.increaseSize}>
            <Text style={styles.text}>Increase size</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.changeColor}>
            <Text style={styles.text}>Change color</Text>
          </TouchableOpacity>


        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  gray: {
    backgroundColor: '#cccccc',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d35400',
  },

  spinner: {
    marginBottom: 50
  },

  btn: {
    marginTop: 20
  },

});
