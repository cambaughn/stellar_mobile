import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Modal, TouchableHighlight, TextInput } from 'react-native';
import { Link } from 'react-router-native';

import { postQuestion } from '../util/postQuestion';
import colors from '../util/colors';

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
            <TextInput
              multiline={true}
              numberOfLines={4}
              style={styles.input}
              placeholder={"Ask a question"}
              placeholderTextColor={colors.midGrey}
            />

            <TouchableHighlight onPress={() => {
              console.log('sending question')
            }}
              style={styles.buttonPrimary}
              underlayColor={colors.primary}
            >
              <Text style={styles.buttonPrimaryText}>Ask</Text>
            </TouchableHighlight>

          </View>
        </View>
      </Modal>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    // marginTop: 50,
    height: '90%',
    width: '100%',

    backgroundColor: 'white',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    // backgroundColor: 'lightgreen',
    width: Dimensions.get("window").width - 100,
    minHeight: 30,
    maxHeight: 300,

    paddingLeft: 10,
    paddingRight: 10,

    fontSize: 20,
  },

  buttonPrimary: {
    backgroundColor: colors.primary,

    width: Dimensions.get("window").width - 100,
    height: 30,

    marginTop: 20,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonPrimaryText: {
    color: 'white',
  },
})

export default AskQuestionModal;
