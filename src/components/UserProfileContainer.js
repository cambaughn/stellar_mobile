import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

import UserProfile from './UserProfile';
import AskQuestionModal from './AskQuestionModal';

import { getUserById } from '../util/getUsers';
import { getQuestionsByUserId } from '../util/getQuestions';

import { UPDATE_FOCUSED_USER, SET_FOCUSED_USER_QUESTIONS } from '../redux/actionTypes';


const UserProfileContainer = ({ match, store }) => {
  let userId = match.params.userId;


  if (userId != store.getState().focusedUser.id) {
    console.log('this user => ', userId)
    getUserById(userId, user => store.dispatch({ type: UPDATE_FOCUSED_USER, user }) );
    getQuestionsByUserId(userId, questions => store.dispatch({ type: SET_FOCUSED_USER_QUESTIONS, questions }));
  }

  return (
    <View>
      <UserProfile user={store.getState().focusedUser} questions={store.getState().focusedUserQuestions} />
      <AskQuestionModal />
    </View>
  )
}

export default UserProfileContainer;
