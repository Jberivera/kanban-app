import {
  ADD_TASK,
  addTaskEpic
} from './actions';

const actionHandlers = {
  [ADD_TASK]: (state, action) => {
    const firstCol = Object.keys(state)[0];

    return Object.assign({}, state, {
      [firstCol]: Object.assign({}, state[firstCol], {
        data: [
          {
            'id': action.id,
            'title': action.title,
            'description': action.description
          },
          ...state[firstCol].data
        ]
      })
    });
  }
};

export default actionHandlers;
export { addTaskEpic };
