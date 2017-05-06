/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, NavigatorIOS } from 'react-native';
import Login from './src/components/Login/Login';

export default class githubapp extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Login,
          title: 'User Login'
        }}
        style={{ flex: 1  }}
        barTintColor = "#3498db"
        titleTextColor = "#FFF"
      />
    );
  }
}

AppRegistry.registerComponent('githubapp', () => githubapp);
