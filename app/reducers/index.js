import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tasks from './tasks';
import user from './user';

const kanbanApp = combineReducers({
  tasks,
  user,
  routing: routerReducer
});

export default kanbanApp;
