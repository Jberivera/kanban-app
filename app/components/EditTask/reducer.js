import {
  EDIT_TASK,
  editTaskEpic
} from './actions';

const actionHandlers = {
  [EDIT_TASK]: (state, action) => {
    const arrayFrom = state[action.groupFrom];
    const index = arrayFrom.findIndex((task) => task.id === action.id);

    return Object.assign({}, state, {
      [action.groupFrom]: [
        ...arrayFrom.slice(0, index),
        {
          'id': action.id,
          'title': action.title,
          'description': action.description
        },
        ...arrayFrom.slice(index + 1)
      ]
    });
  }
};

export default actionHandlers;
export { editTaskEpic };
