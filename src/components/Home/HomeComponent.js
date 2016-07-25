import React, { Component } from 'React';

import {
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
  }
})

export default class HomeComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          H3LLOE
        </Text>
      </View>
    );
  }
}


