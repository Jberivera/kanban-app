import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { tasks, user } from '../../reducers';

export const rootReducer = combineReducers({
  tasks,
  user,
  routing: routerReducer
});
