import React, { Component } from 'react';
import { View, StyleSheet, Button, Linking } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Button title="Click me" onPress={ ()=>{ Linking.openURL('https://google.com')}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#ecf0f1',
  },
});



