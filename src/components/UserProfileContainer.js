import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

import UserProfile from './UserProfile';
import { getUserById } from '../util/getUsers';
import { getQuestionsByUserId } from '../util/getQuestions';

import { UPDATE_FOCUSED_USER } from '../redux/actionTypes';


class UserProfileContainer extends Component {
  constructor(props) {
    super(props);

    this.getUser = this.getUser.bind(this)
    this.getQuestions = this.getQuestions.bind(this)

    this.store = this.props.store;
  }

  componentWillMount() {
    console.log('gettin user')
    let userId = this.props.match.params.userId;
    this.getUser(userId);

    // this.getQuestions(userId);
  }

  getUser(userId) {
    getUserById(userId, user => this.store.dispatch({ type: UPDATE_FOCUSED_USER, user }) );
  }

  getQuestions(userId) {
    getQuestionsByUserId(userId, questions => this.store.dispatch({ type: something, questions }));
  }


  render() {
    return (
      <View>
        <UserProfile user={this.store.getState().focusedUser} questions={this.store.getState().questions} />
      </View>
    )
  }
}

export default UserProfileContainer;
