import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal, Dimensions, TouchableHighlight } from 'react-native';
import { Link } from 'react-router-native';

import Camera from 'react-native-camera';

import colors from '../util/colors';

class RecordAnswer extends Component {

  constructor(props) {
    super(props);

    this.takePicture = this.takePicture.bind(this);
  }

  takePicture() {
  this.camera.capture()
    .then((data) => console.log(data))
    .catch(err => console.error(err));
}

  render() {
    return (
      <View>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={true}
        >
          <View style={styles.container}>
            <Camera
              ref={(cam) => {
                this.camera = cam;
              }}
              style={styles.preview}
              aspect={Camera.constants.Aspect.fill}
            >
              <TouchableHighlight onPress={this.takePicture} underlayColor={colors.lightGrey} style={styles.capture}>
                <View></View>
              </TouchableHighlight>
            </Camera>

            {/* <Text>{this.props.match.params.questionId}</Text> */}
            {/* <Text>State: {this.props.location.state.question.text}</Text> */}
          </View>
        </Modal>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    // paddingTop: 80,
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: 'white',
    borderRadius: 100,
    width: 50,
    height: 50,
    margin: 40
  }
})

export default RecordAnswer;
