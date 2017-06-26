import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { NativeRouter, Route, Link, Redirect } from 'react-router-native';

import Emoji from 'react-native-emoji';

import PendingQuestionList from './PendingQuestionList';

const Home = ({ questions }) => {
  // if (questions.length) {
  //   return (
  //     <ScrollView style={styles.scrollView}>
  //       <PendingQuestionList questions={questions} />
  //     </ScrollView>
  //   )
  // } else {
    return (
      <View style={styles.container}>
        <Text style={styles.bigText}>You're not following anyone yet</Text>
        <Link to='/search'>
          <Text style={styles.smallText}>Search for friends to follow →</Text>
        </Link>
      </View>
    )
  // }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    height: Dimensions.get("window").height - 150,

    paddingTop: 30,
  },

  scrollView: {
    height: Dimensions.get("window").height - 200,
  },

  bigText: {
    fontWeight: '500',
    fontSize: 30,

    paddingLeft: 30,
    marginBottom: 15,
  },

  smallText: {
    fontWeight: '400',
    fontSize: 15,

    paddingLeft: 30,
    marginBottom: 15,
  },
});

export default Home;
