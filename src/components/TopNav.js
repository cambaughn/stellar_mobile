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
    height: 40,
    width: '100%',

    position: 'absolute',
    top: 10,
    left: 0,

    borderBottomWidth: 1,
    borderColor: '#ecf0f1',

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
