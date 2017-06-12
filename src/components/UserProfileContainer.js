import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

import UserProfile from './UserProfile';
import { getAllUsers } from '../util/getUsers';


class UserProfileContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.getUser(this.props.match.params.userId);
  }

  getUser(userId) {
    getAllUsers(userId, (user) => { this.setState({ user })});
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
