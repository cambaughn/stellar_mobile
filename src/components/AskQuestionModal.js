import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight } from 'react-native';
import { Link } from 'react-router-native';

import { postQuestion } from '../util/postQuestion';

const AskQuestionModal = () => {
  return (
    <View>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={true}
      >
        <View style={styles.container}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight onPress={() => {
              console.log('sending question')
            }}>
              <Text>Ask</Text>
            </TouchableHighlight>

          </View>
        </View>
      </Modal>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
})

export default AskQuestionModal;
