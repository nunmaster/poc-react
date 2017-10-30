import React, { Component } from 'react';
import { View, Text } from 'react-native';
export default class Button extends Component {
  render() {
    return (
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Button</Text>
    <Text>Button</Text>
  </View>
    );
  }
}