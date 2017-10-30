import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
export default class Home extends Component {
  render() {
  	const {navigation} = this.props;
    return (
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>

    <Button
      onPress={() => navigation.navigate('detail')}
      title="Go to details"
    />
  </View>
    );
  }
}