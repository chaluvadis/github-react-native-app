/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Login from './src/components/Login/Login';

export default class githubapp extends Component {
  render() {
    return (
      <Login />
    );
  }
}

AppRegistry.registerComponent('githubapp', () => githubapp);
