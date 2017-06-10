import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Redirect } from 'react-router-native';


const UnansweredQuestion = ({ question }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.bold}>{question.answerer.name}</Text>
      <Text>{question.text}</Text>
      <Text>- {question.asker.name}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    minHeight: 50,

    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 30,

    borderBottomWidth: 1,
    borderColor: '#ecf0f1',
  },

  bold: {
    fontWeight: 'bold',
  },
})

export default UnansweredQuestion;
