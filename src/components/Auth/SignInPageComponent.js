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
  }
})

export default class SignInPageComponent extends Component {
  render() {
    return (
      <View style={styles.signin}>
        <Text>
          Sign In
        </Text>
      </View>
    );
  }
}