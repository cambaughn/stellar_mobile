import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

import UserProfile from './UserProfile';
import { getUserById } from '../util/getUsers';


class UserProfileContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    }

    this.getUser = this.getUser.bind(this)
  }

  componentDidMount() {
    this.getUser(this.props.match.params.userId);
  }

  getUser(userId) {
    getUserById(userId, user => this.setState({ user }));
  }


  render() {
    return (
      <View>
        <UserProfile user={this.state.user} />
      </View>
    )
  }
}

export default UserProfileContainer;
