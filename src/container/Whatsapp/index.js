import React, { Component } from 'react';
import { Container, Header, Tab, Tabs } from 'native-base';
import Phone from './Phone';
import Message from './Message';
import Contact from './Contact';

export default class extends Component {
  render() {
    return (
      <Container>
        
        <Tabs>
          <Tab heading="Phone">
            <Phone />
          </Tab>
          <Tab heading="Message">
            <Message />
          </Tab>
          <Tab heading="Contact">
            <Contact />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}