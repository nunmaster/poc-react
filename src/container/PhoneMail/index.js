import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, Toast } from 'native-base';
import call from 'react-native-phone-call'
import email from 'react-native-email'

export default class extends Component {

	 call(){
      const args = {
      number: '191', 
      prompt: true
    }
    call(args).catch(console.error)
	}

  mail = () => {
        const to = ['tiaan@email.com', 'foo@bar.com'] // string or array of email addresses
        email(to, {
            // Optional additional arguments
            cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
            bcc: 'mee@mee.com', // string or array of email addresses
            subject: 'Show how to use',
            body: 'Some body right here'
        }).catch(console.error)
  }
 
  render() {
    return (
      <Content>
        <Button full dark onPress={this.call}>
          <Text> Call 191 </Text>
        </Button>
        <Button full light onPress={this.mail}>
          <Text> Email </Text>
        </Button>
      </Content>
    );
  }
}