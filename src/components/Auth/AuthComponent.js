import React, { Component } from 'react';
import SignInComponent from './../Auth/SignInComponent';
import SignUpComponent from './../Auth/SignUpComponent';

import {
  Stylesheet,
  View,
  Text
} from 'react-native';

export default class AuthComponent extends Component {
  render() {
    return (
      <View>
        <SignInComponent />
        <SignUpComponent />
      </View>
    );
  }
};

