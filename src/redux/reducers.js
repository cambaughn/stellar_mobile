
import { combineReducers } from 'redux';

function currentUser(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_USER':
      return action.user;
    default:
      return state;
  }
}


function questions(state = [], action) {
  switch (action.type) {
    case 'SET_QUESTIONS':
      return action.questions;
    default:
      return state;
  }
}

function users(state = [], action) {
  switch (action.type) {
    case 'SET_USERS':
      return action.users;
    default:
      return state;
  }
}

const stellarApp = combineReducers({
  currentUser,
  questions,
  users
});

export { currentUser, questions, users, stellarApp };
