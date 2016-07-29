import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from '../reducers/rootReducer';

const logger = createLogger();
const middleware = applyMiddleware(thunk, logger);

export default (data = {}) => {
  const rootReducer = combineReducers({
    app: reducer
  });

  return createStore(rootReducer, data, middleware)
};