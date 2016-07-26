import React, { Component } from 'react';

import {
  TouchableHighlight,
  Stylesheet,
  View,
  Text
} from 'react-native';

export default class SignUpButtonComponent extends Component{
  signUpButton(){
    console.log('Sign up clicked');
  }

  render() {
    return (
      <View>
        <TouchableHighlight 
          onPress={this.signUpButton.bind(this)}>
          <View>
            <Text>Sign Up</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}