import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { firebaseMiddleware } from '../js/firebaseApi';
import thunk from 'redux-thunk';
import { rootReducer } from './modules/root';

const middlewares = [
  thunk,
  firebaseMiddleware
];

export default function configureStore(preloadedState = {}) {
  // only inlcude logger in development
  if (process.env.NODE_ENV === 'development') {
    const createLogger = require('redux-logger');
    const logger = createLogger();
    middlewares.push(logger);
  }

  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  );

  return store;
}
