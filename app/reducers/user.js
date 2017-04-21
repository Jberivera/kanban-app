import createReducer from 'redux-createreducer';
import {
  GET_USER
} from '../actions/user-action-creators';

const initialState = {};

const actionHandlers = {
  [GET_USER]: (state, action) => {
    return Object.assign({}, state, {
      res: action.response
    });
  },
  'LOGOUT': () => {
    return {};
  },
  'LOGIN': (state, { payload }) => {
    if (payload.response) {
      return Object.assign({}, state, {
        res: payload.response
      });
    }
    return state;
  }
};

export default createReducer(initialState, actionHandlers);
