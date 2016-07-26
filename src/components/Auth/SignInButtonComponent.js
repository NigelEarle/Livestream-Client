import React, { Component } from 'react';

import {
  TouchableHighlight,
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class SignInButtonComponent extends Component {
  signInButton(){
    console.log("Sign in clicked");
  }
  render(){
    return(
      <View>
        <TouchableHighlight 
          onPress={this.signInButton.bind(this)}>
          <View>
            <Text>Sign In</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
};
