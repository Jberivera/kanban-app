import { combineReducers } from 'redux';
import tasks from './tasks';
import user from './user';

const kanbanApp = combineReducers({
  user,
  tasks
});

export default kanbanApp;
