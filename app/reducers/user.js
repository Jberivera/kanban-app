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
  '@@router/LOCATION_CHANGE': (state, action) => {
    return Object.assign({}, state, {
      res: action.response
    });
  }
};

export default createReducer(initialState, actionHandlers);
