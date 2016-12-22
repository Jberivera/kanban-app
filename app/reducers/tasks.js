import 'rxjs';
import 'rxjs/add/operator/mapTo';
import createReducer from 'redux-createreducer';
import { combineEpics } from 'redux-observable';
import editProject from '../components/EditProject/reducer';
import editTask from '../components/EditTask/reducer';
import newTask, { addTaskEpic } from '../components/NewTask/reducer';
import taskGroup from '../components/TaskGroup/reducer';
import tasksWall from '../components/TasksWall/reducer';

const initialState = {
  toDo: [],
  inProgress: [],
  Done: []
};

const actionHandlers = Object.assign(
  {
    'LOGOUT': (state, action) => {
      return Object.assign({}, initialState);
    },
    '@@router/LOCATION_CHANGE': (state, action) => {
      return action.tasks ? Object.assign({}, action.tasks) : state;
    }
  },
  editProject,
  editTask,
  newTask,
  taskGroup,
  tasksWall
);

export const tasksEpic = combineEpics(
  addTaskEpic
);

export default createReducer(initialState, actionHandlers);
