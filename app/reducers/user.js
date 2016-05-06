import createReducer from 'redux-createreducer';
import {
  GET_USER
} from '../actions/user-action-creators';

const initialState = {
  user: {}
};

const actionHandlers = {
  [GET_USER]: (state, action) => {
    return Object.assign({}, state, {
      res: action.response
    });
  }
};

export default createReducer(initialState, actionHandlers);
