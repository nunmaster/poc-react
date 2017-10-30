import React, { Component } from "react";
import { Modal, TouchableHighlight } from 'react-native';
import { Content, Button, Icon, Text, View, Toast } from "native-base";

export default class extends Component {

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <Content>
        <Button iconLeft dark onPress={()=>Toast.show({
              text: 'Clicked',
              position: 'bottom',
              duration: 1000       
          })}>
          <Icon name="home" />
          <Text> Primary </Text>
        </Button>
        <Button iconCenter rounded onPress={()=>Toast.show({
              text: 'Clicked',
              position: 'bottom',
              duration: 1000       
          })}>
          <Icon name="favorite" />
        </Button>
      </Content>
    );
  }
}