import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

let styles = StyleSheet.create({
  signin: {
    fontSize: 30,
    textAlign: 'center',
    margin: 100,
    color: '#6984cb'
  }
})

export default class SignInPageComponent extends Component {
  render() {
    return (
      <View>
        <Text style={styles.signin}>
          Sign In
        </Text>
      </View>
    );
  }
}