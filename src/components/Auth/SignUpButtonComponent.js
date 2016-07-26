import React, { Component } from 'react';

import {
  TouchableHighlight,
  StyleSheet,
  View,
  Text
} from 'react-native';

let styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    backgroundColor: '#EFEFEF'
  }
})
export default class SignUpButtonComponent extends Component{

  onSignUpPressed(){
    console.log('Sign up clicked');
  }

  render() {
    return (
      <View>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {this.onSignUpPressed()}}
          activeOpacity={75 / 100}
          underlayColor={"rgb(210,210,210)"}>
          <Text>Sign Up</Text>
        </TouchableHighlight>
      </View>
    );
  }
}