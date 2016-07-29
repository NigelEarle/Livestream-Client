import * as types from '../constants/ActionTypes';
import axios from 'axios';

//define dispatch actions
export function getSignInText(){
  return (dispatch) => {
    dispatch({
      type: types.GET_SIGNIN,
      data: 'SIGN IN BRUH!!'
    })
  }
  
};