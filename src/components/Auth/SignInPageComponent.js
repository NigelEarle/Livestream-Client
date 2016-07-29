import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSignInText } from './../../actions/appActions';

import {
  TextInput,
  StyleSheet,
  View,
  Text
} from 'react-native';

let styles = StyleSheet.create({
  signin: {
    fontSize: 30,
    textAlign: 'center',
    margin: 100,
    color: '#6984cb'
  },
  email: {
    height: 40,
    width: 300,
    marginTop: 135,
    marginLeft: 40,
    borderColor: 'black',
    borderWidth: 1
  },
  password: {
    height: 40,
    width: 300,
    marginTop: 30,
    marginLeft: 40,
    borderColor: 'black',
    borderWidth: 1
  }
})

class SignInPageComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  componentWillMount(){
    // make dispatch func call
    getSignInText();
  }

  render() {
    return (
      <View>
        <Text style={styles.signin}>
          {this.props.message}
        </Text>
        <TextInput
          placeholder="Email"
          autoCorrect={false}
          style={styles.email}
          onChange={(event) => {
            this.setState({
              email: event.nativeEvent.text
            })
          }}
        />
        <TextInput
          placeholder="Password"
          autoCorrect={false}
          style={styles.password}
          onChange={(event) => {
            this.setState({
              email: event.nativeEvent.text
            })
          }}
        />
      </View>
    );
  }
}

export default connect((state) => ({
  // showcase render from redux state; will not persist
  signin: state.signin
}))(SignInPageComponent);