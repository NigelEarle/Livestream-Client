import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSignInText } from './../../actions/AppActions';

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
    this.props.getSignInText();
  }

  render() {
    console.log("RENDER PROPS",this.props)
    return (
      <View>
        <Text style={styles.signin}>
          {this.props.signin}
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

function mapStateToProps(state){
  return {
    signin: state.app.signin
  }
}

export default connect(mapStateToProps, {
  getSignInText: getSignInText
})(SignInPageComponent);