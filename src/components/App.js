import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Redirect, Switch } from 'react-router-native';


import UserList from './UserList';
import Home from './Home';
import BottomNav from './BottomNav';
import TopNav from './TopNav';
import Login from './Login';
import Search from './Search';
import UserProfileContainer from './UserProfileContainer';

import { getAllUsers } from '../util/getUsers';
import { getAllQuestions } from '../util/getQuestions';
import { setUsers, setQuestions } from '../redux/actionCreators';


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

  getCurrentUser() {
    return this.props.store.getState().currentUser;
  }


  componentDidMount() {
    getAllUsers(users => {
      this.props.store.dispatch({ type: 'SET_USERS', users: users });
    })

    getAllQuestions(questions => {
      this.props.store.dispatch(setQuestions(questions));
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

            <Route path='/user/:userId' render={({ match }) =>  <UserProfileContainer match={match} store={this.props.store} /> } />

            {/* <Route path='/login' component={Login} />
            <Route path='/search' render={() => <UserList users={this.store.getState().users} /> }/>            */}
          </Switch>

          <BottomNav currentUser={this.getCurrentUser()}  />
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
