import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

let styles = StyleSheet.create({
  signup: {
    fontSize: 30,
    textAlign: 'center',
    margin: 100,
  }
})


export default class SignUpPageComponent extends Component {
  render() {
    return (
      <View style={styles.signup}>
        <Text>
          Sign Up
        </Text>
      </View>
    );
  }
}