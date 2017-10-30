import React, { Component } from "react";

import { FlatList } from "react-native";
import { View, Text, Button, Icon } from "native-base";

import { ListItem } from "native-base";

export default class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };

  goTo(item) {
    const { navigation } = this.props;
    navigation.navigate(item.route);
  }

  render() {
    const menuData = [
      { key: "Button", route: "button" },
      { key: "Image", route: "image" }
    ];
    return (
      <View>        
        <FlatList
          data={menuData}
          renderItem={({ item }) => (
            <ListItem onPress={() => this.goTo(item)} style={{marginLeft:0,paddingLeft:10}}>
              <Text>{item.key}</Text>
            </ListItem>
          )}
        />
      </View>
    );
  }
}