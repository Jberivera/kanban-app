import createReducer from 'redux-createreducer';
import addToDo from './addToDo';
import { ADD_TODO } from '../actions/action-creators';

const initialState = {
  toDo: [],
  inProgress: [],
  done: []
};

const actionHandlers = {
  [ADD_TODO]: (state, action) => Object.assign({}, state, { toDo: addToDo(state.toDo, action) })
};

export default createReducer(initialState, actionHandlers);
