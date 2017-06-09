import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Redirect } from 'react-router-native';
import { Provider } from 'react-redux';


import UserList from './UserList';
import Profile from './Profile';
import BottomNav from './BottomNav';
import Login from './Login';
import getUsers from '../util/getUsers';


class App extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.store.getState())

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


  componentDidMount() {
    getUsers.all(users => {
      this.props.store.dispatch({ type: 'SET_USERS', users: users });
    })
  }

  setUsers(users) {

  }


  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>

          <Route exact path='/' render={() => <UserList users={this.getUsers()} /> }/>
          {/* <Route path='/login' component={Login} />
            <Route path='/search' render={() => <UserList users={this.store.getState().users} /> }/>
          <Route path='/profile' component={Profile} /> */}

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
