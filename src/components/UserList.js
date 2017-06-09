import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';


const UserList = ({ users }) => {

  console.log(`USERS => ${users}`)

  return (
    <View>
      { users.map(user => {
        return <Text key={user.id}> {user.name} </Text>
      })}
    </View>
  )
}

export default UserList;
