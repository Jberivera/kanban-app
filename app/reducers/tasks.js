import createReducer from 'redux-createreducer';
import {
  ADD_TODO,
  EDIT_TASK,
  RE_ORDER,
  MOVE_FROM_TO
} from '../actions/action-creators';

const initialState = {
  toDo: [],
  inProgress: [],
  Done: []
};

const actionHandlers = {
  [ADD_TODO]: (state, action) => Object.assign({}, state, {
    toDo: [
      {
        'id': action.id,
        'title': action.title,
        'description': action.description
      },
      ...state.toDo
    ]
  }),
  [EDIT_TASK]: (state, action) => {
    const arrayFrom = state[action.groupFrom];
    const index = arrayFrom.findIndex((task) => task.id === action.id);

    return Object.assign({}, state, {
      [action.groupFrom]: [
        ...arrayFrom.slice(0, index),
        {
          'id': action.id,
          'title': action.title,
          'description': action.description
        },
        ...arrayFrom.slice(index + 1)
      ]
    });
  },
  [MOVE_FROM_TO]: (state, action) => {
    const arrayFrom = state[action.groupFrom];
    const arrayTo = state[action.groupTo];
    let { index } = action;
    index = index !== -1 ? index : arrayTo.length;
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
  },
  [RE_ORDER]: (state, action) => {
    const arrayFrom = state[action.groupFrom];
    const { index } = action;

    const auxArray = arrayFrom.filter((task) => task.id !== action.id);

    return Object.assign({}, state, {
      [action.groupFrom]: [
        ...auxArray.slice(0, index),
        {
          'id': action.id,
          'title': action.title,
          'description': action.description
        },
        ...auxArray.slice(index)
      ]
    });
  },
  'LOGOUT': (state, action) => {
    return Object.assign({}, initialState);
  },
  '@@router/LOCATION_CHANGE': (state, action) => {
    return action.tasks ? Object.assign({}, action.tasks) : state;
  }
};

export default createReducer(initialState, actionHandlers);
