import React, { Component } from 'react';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './src/components/App';


const stellar_mobile = () => {
  return (
    <App />
  );
}


export default stellar_mobile;
AppRegistry.registerComponent('stellar_mobile', () => stellar_mobile);
