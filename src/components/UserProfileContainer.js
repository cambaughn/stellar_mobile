import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

import UserProfile from './UserProfile';
import AskQuestionModal from './AskQuestionModal';

import { getUserById } from '../util/getUsers';
import { getQuestionsByUserId } from '../util/getQuestions';
import { follow, isFollowing } from '../util/follow';

import { UPDATE_FOCUSED_USER, SET_FOCUSED_USER_QUESTIONS } from '../redux/actionTypes';


class UserProfileContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      following: false,
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
    this.checkFollowing = this.checkFollowing.bind(this);
    this.store = this.props.store;
  }

  toggleModal() {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  handleFollow() {
    let followerId = this.store.getState().currentUser.id;
    let followingId = this.store.getState().focusedUser.id;
    follow(followerId, followingId, console.log);
  }

  checkFollowing(followerId, followingId) {
    isFollowing(followerId, followingId, following => this.setState({ following }));
  }

  render() {

    let userId = this.props.match.params.userId;
    if (userId != this.store.getState().focusedUser.id) {
      getUserById(userId, user => this.store.dispatch({ type: UPDATE_FOCUSED_USER, user }) );
      getQuestionsByUserId(userId, questions => this.store.dispatch({ type: SET_FOCUSED_USER_QUESTIONS, questions }));
      this.checkFollowing(this.store.getState().currentUser.id, userId);
    }

    return (
      <View>
        <UserProfile
          user={this.store.getState().focusedUser}
          questions={this.store.getState().focusedUserQuestions}
          toggleModal={this.toggleModal}
          handleFollow={this.handleFollow}
          following={this.state.following}
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
