import createReducer from 'redux-createreducer';
import { ADD_TODO } from '../actions/action-creators';

const initialState = {
  toDo: []
};

const actionHandlers = {
  [ADD_TODO]: (state, action) => [...state, {
    'id': action.id,
    'title': action.title,
    'description': action.description
  }]
};

export default createReducer(initialState, actionHandlers);
