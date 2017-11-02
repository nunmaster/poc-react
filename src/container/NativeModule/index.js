import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, Toast } from 'native-base';
import { NativeModules } from 'react-native';  

export default class extends Component {
	
	state = {
		contact: ""
	};
	
	showVolume = () => {
    const OutputVolume = NativeModules.OutputVolume;  
    OutputVolume.get().then(volume => alert(volume)); 
	}
 
  render() {
    return (
      <Content>
        <Button onPress={this.showVolume}>
          <Text> iOS get volume </Text>
        </Button>
      </Content>
    );
  }
}