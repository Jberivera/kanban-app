import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/debounceTime';
import createReducer from 'redux-createreducer';
import { combineEpics } from 'redux-observable';
import editProject, { addGroupEpic } from '../components/EditProject/reducer';
import editTask, { editTaskEpic } from '../components/EditTask/reducer';
import newTask, { addTaskEpic } from '../components/NewTask/reducer';
import taskGroup, { editGroupNameEpic } from '../components/TaskGroup/reducer';
import tasksWall, { moveFromToEpic, orderChangeEpic } from '../components/TasksWall/reducer';

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
  newTask,
  editTask,
  editProject,
  taskGroup,
  tasksWall
);

export const tasksEpic = combineEpics(
  addTaskEpic,
  editTaskEpic,
  editGroupNameEpic,
  moveFromToEpic,
  orderChangeEpic,
  addGroupEpic
);

export default createReducer(initialState, actionHandlers);
