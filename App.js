import React from "react";
import { Platform } from "react-native";
import { StackNavigator } from "react-navigation";

import Expo from "expo";

import { Container, Content, Text, StyleProvider, Root } from "native-base";

import Home from "~/containers/Home";
import Detail from "~/containers/Detail";
import Button from "~/containers/Button";

import getTheme from "./native-base-theme/components";
import material from "./native-base-theme/variables/material";

const RootNavigator = StackNavigator({
  home: {
    screen: Home
  },
  detail: {
    screen: Detail
  },
  button: {
    screen: Button
  }
});

export default class App extends React.Component {
  state = {
    isReady: false
  };

  async componentWillMount() {
    // if (Platform.OS === "android") {
      await Expo.Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
      });
    // }

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return null;
    }

    return (
      <StyleProvider style={getTheme(material)}>   
        <Root>     
          <RootNavigator />
        </Root>
      </StyleProvider>
    );
  }
}