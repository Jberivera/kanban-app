import { Observable } from 'rxjs/Observable'; // eslint-disable-line no-unused-vars
import '../js/customObservable';
import createReducer from 'redux-createreducer';
import { combineEpics } from 'redux-observable';
import editProject, { addGroupEpic } from '../components/EditProject/reducer';
import editTask, { editTaskEpic } from '../components/EditTask/reducer';
import newTask, { addTaskEpic } from '../components/NewTask/reducer';
import taskGroup, { editGroupNameEpic } from '../components/TaskGroup/reducer';
import tasksWall, { moveFromToEpic, orderChangeEpic } from '../components/TasksWall/reducer';

const initialState = {
  'toDo': {
    data: [],
    name: 'toDo'
  },
  'inProgress': {
    data: [],
    name: 'inProgress'
  },
  'Done': {
    data: [],
    name: 'Done'
  }
};

const actionHandlers = Object.assign(
  {
    'LOGOUT': () => {
      return Object.assign({}, initialState);
    },
    'LOGIN': (state, { payload }) => {
      return payload.tasks ? Object.assign({}, sanitizeDataFromFireBase(payload.tasks)) : state;
    }
  },
  newTask,
  editTask,
  editProject,
  taskGroup,
  tasksWall
);

function sanitizeDataFromFireBase (tasks) {
  return Object.keys(tasks).reduce((obj, key) => {
    return tasks[key].data ? obj[key] = tasks[key] : obj[key] = Object.assign({}, tasks[key], { data: []}), obj;
  }, {});
}

export const tasksEpic = combineEpics(
  addTaskEpic,
  editTaskEpic,
  editGroupNameEpic,
  moveFromToEpic,
  orderChangeEpic,
  addGroupEpic
);

export default createReducer(initialState, actionHandlers);
