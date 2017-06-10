import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import stylePresets from '../util/stylePresets';



const TopNav = () => {
  return (
    <View style={styles.container}>
      <Text>stellar</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',

    position: 'absolute',
    top: 0,
    left: 0,
    paddingTop: 10,

    borderBottomWidth: 1,
    borderColor: '#ecf0f1',
    backgroundColor: 'white',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    zIndex: 1,

    // paddingLeft: 40,
    // paddingRight: 40,
    // marginBottom: 100,
  }
})

export default TopNav;
