import React, { Component } from 'React';
import SignInButtonComponent from './../Auth/SignInButtonComponent';
import SignUpButtonComponent from './../Auth/SignUpButtonComponent';

import {
    TouchableHighlight,
    StyleSheet,
    Text,
    View
} from 'react-native';

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    marginTop: 100,
    color: '#6984cb'
  }

});

export default class HomeComponent extends Component {
  
  render() {
    return (
      <View style={styles.welcome}>
        <Text>
          Welcome!
        </Text>
        <SignInButtonComponent />
        <SignUpButtonComponent />
      </View>
    );
  }
}
             



