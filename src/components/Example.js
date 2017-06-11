import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';


const Example = () => {
  return (
    <View></View>
  )
}

export default Example;

const styles = StyleSheet.create({
  container: {

  },
})


// OR

class Example extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View></View>
    )
  }
}

export default Example;
