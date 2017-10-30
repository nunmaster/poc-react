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
              text: 'Wrong password!',
              position: 'bottom',
              buttonText: 'Okay'
            })}>
          <Icon name="home" />
          <Text> Primary </Text>
        </Button>


        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>

      </Content>
    );
  }
}