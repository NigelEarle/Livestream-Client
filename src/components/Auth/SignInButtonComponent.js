import React, { Component, PropTypes } from 'react';
import SignInPageComponent from '../Auth/SignInPageComponent';

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
});

export default class SignInButtonComponent extends Component {

  onSignInPressed(){
    this.props.navigator.push({
      title: 'Sign In',
      component: SignInPageComponent
    });
  }
  
  render(){
    return(
      <View>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {this.onSignInPressed()}}
          activeOpacity={75 / 100}
          underlayColor={"rgb(210,210,210)"}>
          <Text>Sign In</Text>
        </TouchableHighlight>
      </View>
    );
  }
};
