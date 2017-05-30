import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import UserList from './src/components/UserList';
import getUsers from './src/util/getUsers';

import { NativeRouter, Route, Link } from 'react-router-native'

export default class stellar_mobile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    getUsers.all(users => {
      this.setState({ users });
    })
  }


  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>


          <Route exact path="/" render={() => <UserList users={this.state.users}/> }/>
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('stellar_mobile', () => stellar_mobile);
