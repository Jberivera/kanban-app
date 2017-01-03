import {
  EDIT_GROUP_NAME,
  editGroupNameEpic
} from './actions';

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
      return state[b] ? (a[b] = [ ...state[b].data ], a) : (a[nameTo] = [ ...state[nameFrom].data ], a);
    }, {});
  }
};

export default actionHandlers;
export { editGroupNameEpic };
