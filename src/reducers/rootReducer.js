import { handleActions } from 'redux-actions';
import { ActionTypes } from '../constants/ActionTypes';

const initialState = {
  email: '',
  password: '',
  confirm: '',
  signin: ''
};

export default handleActions({
  // handle state
  [ActionTypes.GET_SIGNIN]: (state, action) => {

    return {
      ...state,
      signin: action.data
    }
  }
}, initialState);