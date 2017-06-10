import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import UserListItem from './UserListItem';


const UserList = ({ users }) => {
  return (
    <ScrollView style={styles.container}>
      { users.map(user => {
        return <UserListItem key={user.id} user={user} />
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 50,
  },
})

export default UserList;
