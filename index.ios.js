/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/storeConfig';
import HomeComponent from './src/components/Home/HomeComponent';

// const store = configureStore();
console.log(configureStore);
import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native';

class LivestreamClient extends Component {
  render() {
    return (
      
        <NavigatorIOS
          style={styles.container}
          initialRoute={{
            title: 'Home',
            component: HomeComponent
          }} />
      
    );
  }
};
//</Provider>

// <View style={styles.container}>
//   <Text style={styles.welcome}>
//     Welcome to React Native!
//   </Text>
//   <Text style={styles.instructions}>
//     To get started, edit index.ios.js
//   </Text>
//   <Text style={styles.instructions}>
//     Press Cmd+R to reload,{'\n'}
//     Cmd+D or shake for dev menu
//   </Text>
// </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('LivestreamClient', () => LivestreamClient);
