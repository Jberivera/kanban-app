import {
  ADD_TASK,
  addTaskEpic
} from './actions';

const actionHandlers = {
  [ADD_TASK]: (state, action) => {
    const firstCol = Object.keys(state)[0];

    return Object.assign({}, state, {
      [firstCol]: [
        {
          'id': action.id,
          'title': action.title,
          'description': action.description
        },
        ...state[firstCol]
      ]
    });
  }
};

export default actionHandlers;
export { addTaskEpic };
