import React, { Component } from 'react';
import {
  View,
  TextInput
} from 'react-native';
import Barcode from 'react-native-barcode-builder';
import QRCode from 'react-native-qrcode-svg';

export default class GenerateCode extends Component {
  state = {}
  render() {
    return (
      <View>

        <Barcode value="Hello World" format="CODE128" />
        <Barcode value="ABCBCCBC" format="CODE39" />
        <Barcode value="123123" format="ITF" />
        
        <QRCode
          value="Hello World"
        />
      </View>

    );
  }
}
