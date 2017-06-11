import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

import UserProfile from './UserProfile';

class UserProfileContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <UserProfile />
      </View>
    )
  }
}

export default UserProfileContainer;
