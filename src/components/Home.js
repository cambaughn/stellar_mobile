import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { NativeRouter, Route, Link, Redirect } from 'react-router-native';

import Emoji from 'react-native-emoji';

import PendingQuestionList from './PendingQuestionList';

const Home = ({ questions }) => {
  if (questions.length) {
    return (
      <ScrollView style={styles.scrollView}>
        <PendingQuestionList questions={questions} />
      </ScrollView>
    )
  } else {
    return (
      <View style={styles.container}>
        <Text><Emoji name='sweat_smile' /></Text>
        <Text>It looks like you're not following anyone yet!</Text>
        <Text>Head to Search below find some folks to follow!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: Dimensions.get("window").height - 150,
  },

  scrollView: {
    height: Dimensions.get("window").height - 200,
  }
});

export default Home;
