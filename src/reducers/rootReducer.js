import { handleActions } from 'redux-actions';
import * as types from '../constants/ActionTypes';

const initialState = {
  email: '',
  password: '',
  confirm: '',
  signin: ''
};

export default handleActions({
  [types.GET_SIGNIN]: (state, action) => {

    return {
      ...state,
      signin: action.data
    }
  }
}, initialState)