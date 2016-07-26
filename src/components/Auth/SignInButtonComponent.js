import React, { Component, PropTypes } from 'react';

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
  // static propTypes = {
  //   title: PropTypes.string.isRequired,
  //   navigator: PropTypes.object.isRequired
  // }

  // constructor(props, context) {
  //   super(props, context);
  //   this._onForward = this._onForward.bind(this);
  //   this._onBack = this._onBack.bind(this);
  // }
  onSignInPressed(){
    console.log("Sign in clicked");
    this.props.navigator.push({
      title: 'Sign In',
      
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
