import React, { Component } from 'react';

import {
  Stylesheet,
  View,
  Text
} from 'react-native';

export default class AuthComponent extends Component {
  render() {
    return (
      <View>
        <Text>
          SIGN IN
          SIGN UP
        </Text>
      </View>
    );
  }
};
// <TouchableHighlight 
//           onPress={this.buttonClicked.bind(this)}>
//           <View>
//             <Text>Button!</Text>
//           </View>
//         </TouchableHighlight>
