import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import stylePresets from '../util/stylePresets';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text>Log In or Sign up</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height - 100,

  },
  input: {
    height: 40,
  },
});

export default Login;
