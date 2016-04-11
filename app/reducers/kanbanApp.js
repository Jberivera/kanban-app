import { combineReducers } from 'redux';
import tasks from './tasks';

const kanbanApp = combineReducers({
  tasks
});

export default kanbanApp;
