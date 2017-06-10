import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import UnansweredQuestion from './UnansweredQuestion';


const QuestionList = ({ questions }) => {
  return (
    <View>
      { questions.map(question => {
        return <UnansweredQuestion key={question.id} question={question} />
      })}
    </View>
  )
}

export default QuestionList;
