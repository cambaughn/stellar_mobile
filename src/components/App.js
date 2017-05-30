import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';


import UserList from './UserList';
import Profile from './Profile';
import BottomNav from './BottomNav';
import getUsers from '../util/getUsers';


class App extends Component {

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

          <Route exact path='/' render={() => <UserList users={this.state.users} /> }/>
          <Route path='/search' render={() => <UserList users={this.state.users} /> }/>
          <Route path='/profile' component={Profile} />

          <BottomNav />

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

export default App;
