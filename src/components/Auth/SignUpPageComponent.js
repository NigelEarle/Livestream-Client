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
    color: '#6984cb'
  }
})


export default class SignUpPageComponent extends Component {
  render() {
    return (
      <View>
        <Text style={styles.signup}>
          Sign Up
        </Text>
      </View>
    );
  }
}