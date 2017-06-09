import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Redirect, Switch } from 'react-router-native';


import UserList from './UserList';
import Home from './Home';
import Profile from './Profile';
import BottomNav from './BottomNav';
import TopNav from './TopNav';
import Login from './Login';
import Search from './Search';

import getUsers from '../util/getUsers';


class App extends Component {

  constructor(props) {
    super(props);
    this.getUsers = this.getUsers.bind(this);
    this.props.store.subscribe(this.forceUpdate.bind(this))
  }

  loginRedirect() {
    if (!this.store.getState().currentUser.name) {
      console.log('redirecting')
      return <Redirect to='/login' />
    }
  }

  getUsers() {
    return this.props.store.getState().users;
  }

  getQuestions() {
    return this.props.store.getState().questions;
  }


  componentDidMount() {
    getUsers.all(users => {
      this.props.store.dispatch({ type: 'SET_USERS', users: users });
    })
  }


  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <TopNav />
          <Switch>
            <Route exact path='/' render={() => <Home questions={this.getQuestions()} /> }/>
            <Route path='/search' render={() => <Search users={this.getUsers()} /> }/>

            {/* <Route path='/login' component={Login} />
              <Route path='/search' render={() => <UserList users={this.store.getState().users} /> }/>
            <Route path='/profile' component={Profile} /> */}
          </Switch>

          <BottomNav />
        </View>
      </NativeRouter>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
