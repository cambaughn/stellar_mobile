import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

const UserProfile = ({ user }) => {
  return (
    <View style={styles.container}>
      <Text>{user.name}</Text>
    </View>
  )
}

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    width: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    marginTop: 50,
  },
})
