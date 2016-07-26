import React, { Component, PropTypes } from 'react';
import SignInButtonComponent from './../Auth/SignInButtonComponent';
// import SignUpButtonComponent from './../Auth/SignUpButtonComponent';

import {
  Navigator,
  TouchableHighlight,
  Stylesheet,
  View,
  Text
} from 'react-native';

export default class AuthComponent extends Component {
  render() {
    return (
      <View>
        <Navigator
          initialRoute={{title: 'Sign In', index: 0}}
          renderScene={(route, navigator) => 
            <SignInButtonComponent
              title={route.title}
              onForward={ () => {
                const nextIndex = route.index + 1;
                navigator.push({
                  title: 'Scene ' + nextIndex,
                  index: nextIndex
                })
              }}
              onBack={ () => {
                if(route.index > 0) {
                  navigator.pop();
                }
              }}
            />
          }
        />
        { /*<SignUpButtonComponent /> */}
      </View>
    );
  }
};


