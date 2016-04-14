import createReducer from 'redux-createreducer';
import {
  ADD_TODO,
  MOVE_INPROGRESS
} from '../actions/action-creators';

const initialState = [];

const actionHandlers = {
  [ADD_TODO]: (state, action) => [
    ...state, {
    'id': action.id,
    'title': action.title,
    'description': action.description
  }],
  [MOVE_INPROGRESS]: (state, action) => state.filter((task) => task.id !== action.id)
};

export default createReducer(initialState, actionHandlers);
