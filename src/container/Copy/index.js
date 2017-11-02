import React, { Component } from 'react';
import {
  Clipboard,
  View,
  Text,
  TextInput
} from 'react-native';

export default class Copy extends React.Component {
  state = {
    content: 'Content will appear here'
  };

  _setClipboardContent = async () => {
    Clipboard.setString('Hello World');
    try {
      const content = await Clipboard.getString();
      this.setState({ content });
    } catch (e) {
      this.setState({ content: e.message });
    }
  };

  render() {
    return (
      <View style={{ padding: 20 }}>
        <Text onPress={this._setClipboardContent} style={{ color: 'blue' }}>
          Tap to put "Hello World" in the clipboard
        </Text>
        <Text style={{ color: 'red', marginTop: 20 }}>
          {this.state.content}
        </Text>
        <TextInput
          autoCapitalize="none"
          placeholder='Paste text in here'
          autoCorrect={false}
          style={{
            marginTop: 5,
            borderWidth: 1,
            fontSize: 16,
            padding: 5,
          }}
        />

      </View>
    );
  }
}
