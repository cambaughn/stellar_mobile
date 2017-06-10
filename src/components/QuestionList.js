import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ScrollView } from 'react-native';

import UnansweredQuestion from './UnansweredQuestion';


const QuestionList = ({ questions }) => {
  return (
    <ScrollView style={styles.container}>
      { questions.map(question => {
        return <UnansweredQuestion key={question.id} question={question} />
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 50,

    backgroundColor: 'white',

  }
})


export default QuestionList;
