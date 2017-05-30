import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './src/components/App';


export default class stellar_mobile extends Component {

  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('stellar_mobile', () => stellar_mobile);
