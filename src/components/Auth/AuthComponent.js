import React, { Component, PropTypes } from 'react';
import SignInButtonComponent from './../Auth/SignInButtonComponent';
import SignUpButtonComponent from './../Auth/SignUpButtonComponent';

import {
  TouchableHighlight,
  Stylesheet,
  View,
  Text
} from 'react-native';

export default class AuthComponent extends Component {
  render() {
    return (
      <View>
        <SignInButtonComponent />
        <SignUpButtonComponent /> 
      </View>
    );
  }
};


