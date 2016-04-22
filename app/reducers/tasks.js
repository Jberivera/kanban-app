import createReducer from 'redux-createreducer';
import {
  ADD_TODO,
  MOVE_FROM_TO
} from '../actions/action-creators';

const initialState = {
  toDo: [],
  inProgress: [],
  done: []
};

const actionHandlers = {
  [ADD_TODO]: (state, action) => Object.assign({}, state, {
    toDo: [
      ...state.toDo, {
      'id': action.id,
      'title': action.title,
      'description': action.description
    }]
  }),
  [MOVE_FROM_TO]: (state, action) => {
    const arrayFrom = state[action.groupFrom];
    const arrayTo = state[action.groupTo];
    let { index } = action;

    return Object.assign({}, state, {
      [action.groupFrom]: arrayFrom.filter((task) => task.id !== action.id),
      [action.groupTo]: [
        ...arrayTo.slice(0, index),
        {
          'id': action.id,
          'title': action.title,
          'description': action.description
        },
        ...arrayTo.slice(index)
      ]
    });
  }
};

export default createReducer(initialState, actionHandlers);
