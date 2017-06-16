import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';
import { Link } from 'react-router-native';

import QuestionList from './QuestionList';
import colors from '../util/colors';


const UserProfile = ({ user, questions, toggleModal, handleFollow }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.username}>{user.name}</Text>
        <Text style={styles.bio}>{user.bio}</Text>

        <View style={styles.buttonWrapper}>
          <TouchableHighlight
            style={[styles.button, styles.buttonPrimary]}
            underlayColor={colors.primary}
            onPress={toggleModal}
          >
            <Text style={styles.buttonPrimaryText}>Ask Question</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={[styles.button, styles.buttonSecondary]}
            underlayColor={'white'}
            onPress={handleFollow}
          >
            <Text style={styles.buttonText}>Follow</Text>
          </TouchableHighlight>
        </View>


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

  button: {
    width: '40%',
    height: 30,

    marginTop: 20,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonPrimary: {
    backgroundColor: colors.primary,
  },

  buttonSecondary: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.midGrey,
  },

  buttonPrimaryText: {
    color: 'white',
  },

  buttonText: {

  },
})
