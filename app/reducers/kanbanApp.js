import createReducer from 'redux-createreducer';
import addToDo from './addToDo';

const initialState = {
  tasks: {
    toDo: [],
    inProgress: [],
    done: []
  }
};

const actionHandlers = {
  'ADDTODO': (state, action) => Object.assign({}, state, { tasks: Object.assign({}, state.tasks, { toDo: addToDo(state.tasks.toDo, action)}) })
};

export default createReducer(initialState, actionHandlers);
