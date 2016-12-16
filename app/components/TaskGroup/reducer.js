import {
  EDIT_GROUP_NAME
} from '../../actions/action-creators';

const actionHandlers = {
  [EDIT_GROUP_NAME]: (state, action) => {
    const { nameFrom, nameTo } = action;

    if (nameTo.length === 0) {
      const removeState = Object.assign({}, state);
      delete removeState[nameFrom];
      return removeState;
    }

    return Object.keys(state).map((key) => {
      return key === nameFrom ? nameTo : key;
    }).reduce((a, b) => {
      return state[b] ? (a[b] = [ ...state[b] ], a) : (a[nameTo] = [ ...state[nameFrom] ], a);
    }, {});
  }
};

export default actionHandlers;
