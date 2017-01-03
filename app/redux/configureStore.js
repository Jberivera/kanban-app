import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import { createEpicMiddleware } from 'redux-observable';
import { firebaseMiddleware } from '../js/firebaseApi';
import { rootReducer, rootEpic } from './modules/root';

const middlewares = [
  ReduxThunk,
  createEpicMiddleware(rootEpic)
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
