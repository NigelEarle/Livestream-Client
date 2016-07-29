import { ActionTypes } from '../constants/ActionTypes';
import axios from 'axios';

//define dispatch actions
export function getSignInText(){
  return dispatch({
    type: ActionTypes.GET_SIGNIN,
    data: 'SIGN IN BRUH!!'
  })
  
};