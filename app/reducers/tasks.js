import { combineReducers } from 'redux';
import toDo from './toDo';
import inProgress from './inProgress';
import done from './done';

const tasks = combineReducers({
  toDo,
  inProgress,
  done
});

export default tasks;
