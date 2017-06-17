import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';
import { Link } from 'react-router-native';

import QuestionList from './QuestionList';
import UserProfileButtons from './UserProfileButtons';
import colors from '../util/colors';


const UserProfile = ({ user, questions, toggleModal, handleFollow, following, isCurrentUser }) => {
  if (isCurrentUser) {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.username}>{user.name}</Text>
          <Text style={styles.bio}>{user.bio}</Text>
        </View>

        <QuestionList questions={questions} />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.username}>{user.name}</Text>
          <Text style={styles.bio}>{user.bio}</Text>


          <UserProfileButtons
            toggleModal={toggleModal}
            handleFollow={handleFollow}
            following={following}
          />

        </View>

        <QuestionList questions={questions} />
      </View>
    )
  }
}

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    width: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  top: {
    width: '80%',
    minHeight: 100,

    paddingTop: 20,
    paddingBottom: 20,

    borderBottomWidth: 1,
    borderColor: colors.lightGrey,
    backgroundColor: 'white',
  },

  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  bio: {

  },


})
