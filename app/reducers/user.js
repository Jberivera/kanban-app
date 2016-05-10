import createReducer from 'redux-createreducer';
import {
  GET_USER,
  FACEBOOK_LOGIN
} from '../actions/user-action-creators';

const initialState = {};

const actionHandlers = {
  [GET_USER]: (state, action) => {
    return Object.assign({}, state, {
      res: action.response
    });
  },
  [FACEBOOK_LOGIN]: (state, action) => {
    return Object.assign({}, state, {
      res: Object.assign({}, state.res, action.response)
    });
  }
};

export default createReducer(initialState, actionHandlers);
