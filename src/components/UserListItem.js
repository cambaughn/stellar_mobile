import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';


const UserListItem = ({ user }) => {
  return (
    <View style={styles.container}>
      <Text>{user.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingLeft: 30,

    // borderBottomWidth: 1,
    // borderColor: '#ecf0f1',
  },
})

export default UserListItem;
