import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from "./containers/Home";
import Detail from "./containers/Detail";


const RootNavigator = StackNavigator({
  home: {
    screen: Home,
  },
  detail: {
    screen: Detail,
  },
});

export default RootNavigator;