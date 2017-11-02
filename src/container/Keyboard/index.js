import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
export default class extends Component {
  render() {
    return (
      <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input keyboardType={'default'}/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input keyboardType={'default'} secureTextEntry={true}/>
            </Item>
            <Item floatingLabel last>
              <Label>Email</Label>
              <Input keyboardType={'email-address'} secureTextEntry={true}/>
            </Item>
            <Item floatingLabel last>
              <Label>Number</Label>
              <Input keyboardType={'numeric'} secureTextEntry={true}/>
            </Item>
            <Item floatingLabel last>
              <Label>Phone</Label>
              <Input keyboardType={'phone-pad'} secureTextEntry={true}/>
            </Item>
          </Form>
        </Content>
    );
  }
}