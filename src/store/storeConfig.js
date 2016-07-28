import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from '../reducers';

const reducer = combineReducers(reducers);

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const configureStore = function(initialState: Object = {}): Function {
  return createStoreWithMiddleware(rootReducer, initialState)
};

export default configureStore;