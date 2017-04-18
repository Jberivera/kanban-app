import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { routerReducer } from 'react-router-redux';
import tasks, { tasksEpic } from '../../reducers/tasks';
import user from '../../reducers/user';

export const rootReducer = combineReducers({
  tasks,
  user,
  router: routerReducer
});

export const rootEpic = combineEpics(
  tasksEpic
);
