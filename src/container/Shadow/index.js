import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
export default class Shadow extends Component {
  state = {}
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View elevation={5} style={styles.container}>
          <Text>Hello World !</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 20,
    backgroundColor: '#d9d9d9',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 2
    }
  },
})
  ;
