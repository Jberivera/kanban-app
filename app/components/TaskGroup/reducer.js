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
    }).reduce((obj, key) => {
      if (state[key]) {
        return obj[key] = Object.assign({}, state[key], {
          name: state[key].name,
          data: [ ...state[key].data ]
        }), obj;
      } else {
        return obj[nameTo] = Object.assign({}, state[key], {
          name: key,
          data: [ ...state[nameFrom].data ]
        }), obj;
      }
    }, {});
  }
};

export default actionHandlers;
export { editGroupNameEpic };
