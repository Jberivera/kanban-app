import createReducer from 'redux-createreducer';
import { MOVE_INPROGRESS } from '../actions/action-creators';

const initialState = [];

const actionHandlers = {
  [MOVE_INPROGRESS]: (state, action) => [...state, {
    'id': action.id,
    'title': action.title,
    'description': action.description
  }]
};

export default createReducer(initialState, actionHandlers);
