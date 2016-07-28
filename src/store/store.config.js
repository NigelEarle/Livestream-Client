import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
);

const configureStore = function(initialState: Object = {}): Function {
  return createStoreWithMiddleware(rootReducer, initialState)
}

export default configureStore;