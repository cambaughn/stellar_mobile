import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';
import { Link } from 'react-router-native';

import QuestionList from './QuestionList';
import colors from '../util/colors';


const UserProfile = ({ user, questions, toggleModal }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.username}>{user.name}</Text>
        <Text style={styles.bio}>{user.bio}</Text>

        <TouchableHighlight
          style={styles.buttonPrimary}
          underlayColor={colors.primary}
          onPress={toggleModal}
        >
          <Text style={styles.buttonPrimaryText}>Ask Question</Text>
        </TouchableHighlight>

      </View>

      <QuestionList questions={questions} />
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
    // backgroundColor: 'pink',
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

  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  bio: {

  },

  buttonPrimary: {
    backgroundColor: colors.primary,

    width: '40%',
    height: 30,

    marginTop: 20,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonPrimaryText: {
    color: 'white',
  }
})
