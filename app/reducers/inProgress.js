import createReducer from 'redux-createreducer';
import {
  MOVE_INPROGRESS,
  MOVE_DONE
} from '../actions/action-creators';

const initialState = [];

const actionHandlers = {
  [MOVE_INPROGRESS]: (state, action) => [...state, {
    'id': action.id,
    'title': action.title,
    'description': action.description
  }],
  [MOVE_DONE]: (state, action) => state.filter((task) => task.id !== action.id)
};

export default createReducer(initialState, actionHandlers);
