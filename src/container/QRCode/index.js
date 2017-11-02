import React, { Component } from 'react';
import {
  Text,
  Alert,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class QRCode extends Component {

  _renderTitleBar() {
    return (
      <Text
        style={{
          color: 'white',
          textAlignVertical: 'center',
          textAlign: 'center',
          font: 20,
          padding: 12
        }}
      >Scan Code</Text>
    );
  }

  barcodeReceived = (e) => {
    Alert.alert(`Type: ${e.type}\nData: ${e.data}`);
    console.log(e);
    setTimeout(() => this.scanner.reactivate(), 2000);
  }

  render() {
    return (
      <QRCodeScanner
        ref={(node) => { this.scanner = node; }}
        onRead={this.barcodeReceived}
        bottomContent={(
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },

  textBold: {
    fontWeight: '500',
    color: '#000',
  },

  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },

  buttonTouchable: {
    padding: 16,
  },
});
