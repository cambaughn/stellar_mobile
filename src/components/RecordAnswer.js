import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal, Dimensions, TouchableHighlight } from 'react-native';
import { Link } from 'react-router-native';

import Camera from 'react-native-camera';

import colors from '../util/colors';
import postAnswer from '../util/postAnswer';

class RecordAnswer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videoInfo: {}
    }

    this.startRecording = this.startRecording.bind(this);
    this.stopRecording = this.stopRecording.bind(this);

    Camera.checkDeviceAuthorizationStatus().then(result => console.log(result))
  }

  startRecording() {
    console.log('recording video')
    this.camera.capture({
      audio: true,
      mode: Camera.constants.CaptureMode.video,
      target: Camera.constants.CaptureTarget.disk
    })
    .then((video) => {
      console.log(video)
      postAnswer(video, response => this.setState({videoInfo: response }))
    })
    .catch(err => console.error(err));
  }

  stopRecording() {
    console.log('stopping video')
    this.camera.stopCapture();
  }

  render() {
    console.log(this.state.videoInfo)
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
              captureMode={Camera.constants.CaptureMode.video}
              captureAudio={true}
              type={Camera.constants.Type.front}
            >
              <TouchableHighlight
                onPressIn={this.startRecording}
                onPressOut={this.stopRecording}
                underlayColor={colors.lightGrey}
                style={styles.capture}
              >
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
