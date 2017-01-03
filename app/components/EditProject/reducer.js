import {
  ADD_GROUP,
  addGroupEpic
} from './actions';

const actionHandlers = {
  [ADD_GROUP]: (state, action) => {
    const { i } = action;
    const stateKeys = Object.keys(state);
    const groupName = `group ${Number(i) + 1}`;
    const tasks = [
      ...stateKeys.slice(0, i),
      groupName,
      ...stateKeys.slice(i, stateKeys.lenght)
    ];

    return tasks.reduce((obj, key) => {
      return obj[key] = state[key] || { data: [], name: groupName }, obj;
    }, {});
  }
};

export default actionHandlers;
export { addGroupEpic };
