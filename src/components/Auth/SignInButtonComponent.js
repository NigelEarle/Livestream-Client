import React, { Component, PropTypes } from 'react';

import {
  TouchableHighlight,
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class SignInButtonComponent extends Component {
  // static propTypes = {
  //   title: PropTypes.string.isRequired,
  //   navigator: PropTypes.object.isRequired
  // }

  // constructor(props, context) {
  //   super(props, context);
  //   this._onForward = this._onForward.bind(this);
  //   this._onBack = this._onBack.bind(this);
  // }
  signInButton(){
    console.log("Sign in clicked");
  }
  // _onForward () {
  //   this.props.navigator.push({
  //     title: 'Scene ' + nextIndex,
  //   });
  // }
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
