import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Redirect } from 'react-router-native';


const UnansweredQuestion = ({ question }) => {
  return (
    <View style={styles.container}>
      <Link to={`/user/${question.answerer.id}`} style={styles.link} underlayColor='white'>
        <Text style={styles.bold}>{question.answerer.name}</Text>
      </Link>
      <Text>{question.text}</Text>
      <Link to={`/user/${question.asker.id}`} style={styles.link} underlayColor='white'>
        <Text>- {question.asker.name}</Text>
      </Link>
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

  link: {
  },
})

export default UnansweredQuestion;
