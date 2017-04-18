import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';
import { rootReducer, rootEpic } from './modules/root';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

const middlewares = [
  ReduxThunk,
  routerMiddleware(history),
  createEpicMiddleware(rootEpic)
];

export default function configureStore(preloadedState = {}) {
  // only inlcude logger in development
  if (process.env.NODE_ENV === 'development') {
    const { createLogger } = require('redux-logger');
    const logger = createLogger();
    middlewares.push(logger);
  }

  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  );

  return { store, history };
}
