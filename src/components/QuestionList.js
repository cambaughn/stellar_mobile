import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';


const QuestionList = ({ questions }) => {
  return (
    <View>
      { questions.map(question => {
        return <Text key={question.id}> {question.text} </Text>
      })}
    </View>
  )
}

export default QuestionList;
