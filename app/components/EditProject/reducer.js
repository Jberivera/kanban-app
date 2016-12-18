import {
  ADD_GROUP
} from './actions';

const actionHandlers = {
  [ADD_GROUP]: (state, action) => {
    const { i } = action;
    const stateKeys = Object.keys(state);
    const tasks = [
      ...stateKeys.slice(0, i),
      `group ${Number(i) + 1}`,
      ...stateKeys.slice(i, stateKeys.lenght)
    ];
    return tasks.reduce((a, b) => {
      return a[b] = state[b] || [], a;
    }, {});
  }
};

export default actionHandlers;
