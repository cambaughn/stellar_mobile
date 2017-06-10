import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Redirect } from 'react-router-native';


const UnansweredQuestion = ({ question }) => {
  return (
    <View>
      <Text>{question.asker.name} asks {question.answerer.name}:</Text>
      <Text>{question.text}</Text>
    </View>
  )
}

export default UnansweredQuestion;
