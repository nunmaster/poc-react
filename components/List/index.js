import React, { Component } from "react";
import { View, ListItem, CheckBox, Body, Text } from "native-base";

import styles from "./styles";

export default class List extends Component {
  render() {
    const {data} = this.props;    
    return (
      <View>
      {data.map(item=>
        <ListItem key={item.key}>
            <CheckBox checked={true} />
            <Body>
              <Text>{item.key} sss</Text>
            </Body>
          </ListItem>
      )}
      </View>
    );
  }
}