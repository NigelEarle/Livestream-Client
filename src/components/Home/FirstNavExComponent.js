import React, { Component } from 'react';

import {
  TouchableHighlight,
  StyleSheet,
  View,
  Text,
} from 'react-native';

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0000'
  }
})

export default class FirstNavExComponent extends Component {
  navSecond(){
    this.props.navigator.push({
      title: 'second',
      component: Second
    })
  }
  render() {
    return (
      <View style={{marginTop: 100}}>
        
          <Text>Hey Guy! Navigate to Second Screen</Text>
        
      </View>
    );
  }
}
// <TouchableHighlight onPress={this.navSecond.bind(this)}>
// </TouchableHighlight>