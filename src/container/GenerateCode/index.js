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
        <QRCode
          value="http://awesome.link.qr"
        />
      </View>

    );
  }
}
