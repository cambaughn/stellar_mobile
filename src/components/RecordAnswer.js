import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { Link } from 'react-router-native';


const RecordAnswer = ({ match, location }) => {
  return (
    <View>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={true}
      >
        <View style={styles.container}>
          <Text>{match.params.questionId}</Text>
          {/* <Text>State: {location.state.question.text}</Text> */}
        </View>
      </Modal>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
  },
})

export default RecordAnswer;
