import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import stylePresets from '../util/stylePresets';

const Login = () => {
  return (
    <View>
      <Text>Log In / Sign up</Text>
      <TextInput placeholder='Luke' style={styles.input}/>
    </View>
  )
}


const styles = StyleSheet.create({
  input: {
    height: 40,
  },
});

export default Login;
