import {
  ADD_TASK,
  TASK_STORED,
  addTaskEpic
} from './actions';

const actionHandlers = {
  [TASK_STORED]: (state, { task, key }) => {
    const firstCol = Object.keys(state)[0];

    return Object.assign({}, state, {
      [firstCol]: Object.assign({}, state[firstCol], {
        data: Object.assign({}, state[firstCol].data, {
          [key]: task
        })
      })
    });
  }
};

export default actionHandlers;
export { addTaskEpic };
