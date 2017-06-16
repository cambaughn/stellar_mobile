import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

import UserProfile from './UserProfile';
import AskQuestionModal from './AskQuestionModal';

import { getUserById } from '../util/getUsers';
import { getQuestionsByUserId } from '../util/getQuestions';

import { UPDATE_FOCUSED_USER, SET_FOCUSED_USER_QUESTIONS } from '../redux/actionTypes';


class UserProfileContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.store = this.props.store;
  }

  toggleModal() {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  render() {

    let userId = this.props.match.params.userId;
    if (userId != this.store.getState().focusedUser.id) {
      console.log('this user => ', userId)
      getUserById(userId, user => this.store.dispatch({ type: UPDATE_FOCUSED_USER, user }) );
      getQuestionsByUserId(userId, questions => this.store.dispatch({ type: SET_FOCUSED_USER_QUESTIONS, questions }));
    }

    return (
      <View>
        <UserProfile
          user={this.store.getState().focusedUser}
          questions={this.store.getState().focusedUserQuestions}
          toggleModal={this.toggleModal}
        />
        <AskQuestionModal
          visible={this.state.modalVisible}
          toggleModal={this.toggleModal}
          asker={this.store.getState().currentUser}
          answerer={this.store.getState().focusedUser}
        />
      </View>
    )
  }


}

export default UserProfileContainer;
