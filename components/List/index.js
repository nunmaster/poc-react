import React, { Component } from "react";

import { FlatList, Text } from "react-native";

export default class ListExample extends Component {

  render() {
    const {label, ...props} = this.props;
    return (
      <View>
        <FlatList {...props} />       
      </View>
    );
  }
}