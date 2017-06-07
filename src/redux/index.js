
import { createStore, combineReducers } from 'redux'
import expect, { createSpy, spyOn, isSpy } from 'expect';
let deepfreeze = require('deepfreeze');

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

const stellarApp = combineReducers({
  currentUser,
  questions
});



const store = createStore(stellarApp);

// Tests




function testCurrentUser() {
  let userBefore = {};
  let userAfter = { name: 'Han Solo' };

  deepfreeze(userBefore);

  expect(
    currentUser(userBefore, {type: 'UPDATE_USER', user: userAfter}))
    .toEqual(userAfter);
}

function testQuestions() {
  let stateBefore = [];
  let action = {
    type: 'SET_QUESTIONS',
    questions: [
      { text: 'Have you heard the tragedy of Darth Plagueis the Wise?'}
    ]
  }
  let stateAfter = [
    { text: 'Have you heard the tragedy of Darth Plagueis the Wise?'}
  ]

  deepfreeze(stateBefore);

  expect(questions(stateBefore, action)).toEqual(stateAfter);
}


testCurrentUser();
testQuestions();
console.log('All tests passed');

console.log(`State =>`, store.getState());

store.dispatch({ type: 'UPDATE_USER', user: { name: 'C3P0' } })
console.log(`State =>`, store.getState());

store.dispatch({ type: 'SET_QUESTIONS', questions: [{ text: 'I have a bad feeling about this' }] })
console.log(`State =>`, store.getState());
