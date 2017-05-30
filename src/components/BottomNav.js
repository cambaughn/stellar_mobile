import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import stylePresets from '../util/stylePresets';



const BottomNav = () => {
  return (
    <View style={styles.container}>
      <Link to='/' underlayColor='white'>
        <Text>Home</Text>
      </Link>
      <Link to='/search' underlayColor='white'>
        <Text>Search</Text>
      </Link>
      <Link to='/profile' underlayColor='white'>
        <Text>Profile</Text>
      </Link>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',

    position: 'absolute',
    bottom: 0,
    left: 0,

    borderTopWidth: 1,
    borderColor: '#ecf0f1',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingLeft: 40,
    paddingRight: 40,
  }
})

export default BottomNav;
