import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

import UserProfile from './UserProfile';
import { getUserById } from '../util/getUsers';
import { getQuestionsByUserId } from '../util/getQuestions';


class UserProfileContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      questions: [],
    }

    this.getUser = this.getUser.bind(this)
    this.getQuestions = this.getQuestions.bind(this)
  }

  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.getUser(userId);

    this.getQuestions(userId);
  }

  getUser(userId) {
    getUserById(userId, user => this.setState({ user }));
  }

  getQuestions(userId) {
    getQuestionsByUserId(userId, questions => this.setState({ questions }));
  }


  render() {
    return (
      <View>
        <UserProfile user={this.state.user} questions={this.state.questions} />
      </View>
    )
  }
}

export default UserProfileContainer;
