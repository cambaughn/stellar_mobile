import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ScrollView } from 'react-native';

import UnansweredQuestion from './UnansweredQuestion';


const PendingQuestionList = ({ questions }) => {
  return (
    <View style={styles.container}>
      { questions.map(question => {
        return <UnansweredQuestion key={question.id} question={question} />
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
  }
})


export default PendingQuestionList;
