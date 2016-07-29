import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from '../reducers/rootReducer';

console.log(reducer);
// const redu = combineReducers(reducer);

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  logger
)(createStore);

// export default function configureStore(initialState){
//   return createStoreWithMiddleware(redu, initialState)
// };