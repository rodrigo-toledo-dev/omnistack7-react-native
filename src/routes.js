import { createAppContainer, createStackNavigator } from 'react-navigation';
import React from 'react';
import { Image } from 'react-native';

import Feeds from './pages/Feeds';
import New from './pages/New';

import logo from './assets/logo.png';

export default createAppContainer(
  createStackNavigator({
    Feeds,
    New
  },{
    defaultNavigationOptions: {
      headerTitle: <Image style={{ marginHorizontal: 20 }} source={logo} />,
      headerBackTitle: null,
      headerTintColor: '#000',
    },
    mode: 'modal'
  })
);