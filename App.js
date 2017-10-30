import React from 'react';
import { View, Text, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Expo from 'expo';

import Home from "~/containers/Home";
import Detail from "~/containers/Detail";


const RootNavigator = StackNavigator({
  home: {
    screen: Home,
  },
  detail: {
    screen: Detail,
  },
});

export default class App extends React.Component {
  state = {
    isReady: false,
  }

  shouldComponentUpdate(){
    return !this.state.isReady;
  }

  async componentWillMount() {
    if (Platform.OS === 'android') {
      await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      });
    }

    this.setState({isReady: true});
  }

  render() {
    if (!this.state.isReady) {
      return null;
    }

    return <RootNavigator/>;
  }

}
