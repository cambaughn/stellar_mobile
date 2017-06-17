import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Redirect } from 'react-router-native';

import PendingQuestionList from './PendingQuestionList';

const Home = ({ questions }) => {
  return (
    <View style={styles.container}>
      <PendingQuestionList questions={questions} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default Home;
