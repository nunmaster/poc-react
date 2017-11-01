import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, Toast } from 'native-base';
import ContactsWrapper from 'react-native-contacts-wrapper';
export default class extends Component {
	
	state = {
		contact: ""
	};
	
	showContact = () => {
		ContactsWrapper.getContact()
        .then((contact) => {
            // Replace this code
            this.setState({
            	contact: contact.phone
            })
            console.log(contact);
        })
        .catch((error) => {
            console.log("ERROR CODE: ", error.code);
            console.log("ERROR MESSAGE: ", error.message);
        });
	}
 
  render() {
    return (
      <Content>
        <Button onPress={this.showContact}>
          <Text> Choose Contact </Text>
        </Button>
        <Text style={{marginTop: 40, color: 'black'}}> {this.state.contact} </Text>
      </Content>
    );
  }
}