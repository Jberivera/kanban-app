import createReducer from 'redux-createreducer';
import addToDo from './addToDo';

const initialState = {
  toDo: [],
  inProgress: [],
  done: []
};

const actionHandlers = {
  'ADDTODO': (state, action) => Object.assign({}, state, { toDo: addToDo(state.toDo, action) })
};

export default createReducer(initialState, actionHandlers);
