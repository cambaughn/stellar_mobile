// Ignore Remote Debugger warning
console.ignoredYellowBox = ['Remote debugger'];

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';

import store from './src/redux/store';

import App from './src/components/App';



const stellar_mobile = () => {
  return (
    <App store={store} />
  );
}


export default stellar_mobile;
AppRegistry.registerComponent('stellar_mobile', () => stellar_mobile);
