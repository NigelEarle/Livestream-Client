import React, { Component } from 'React';
import AuthComponent from './../Auth/AuthComponent.js';
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
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#6984cb'
  },
  button: {

  },

});

export default class HomeComponent extends Component {
  buttonClicked() {
    console.log(this);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome To Livestream!
        </Text>
        <AuthComponent />
      </View>
    );
  }
}
             



