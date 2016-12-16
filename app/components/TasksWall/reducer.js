import {
  RE_ORDER,
  MOVE_FROM_TO
} from '../../actions/action-creators';

const actionHandlers = {
  [MOVE_FROM_TO]: (state, action) => {
    const arrayFrom = state[action.groupFrom];
    const arrayTo = state[action.groupTo];
    let { index } = action;
    index = index !== -1 ? index : arrayTo.length;
    return Object.assign({}, state, {
      [action.groupFrom]: arrayFrom.filter((task) => task.id !== action.id),
      [action.groupTo]: [
        ...arrayTo.slice(0, index),
        {
          'id': action.id,
          'title': action.title,
          'description': action.description
        },
        ...arrayTo.slice(index)
      ]
    });
  },
  [RE_ORDER]: (state, action) => {
    const arrayFrom = state[action.groupFrom];
    const { index } = action;

    const auxArray = arrayFrom.filter((task) => task.id !== action.id);

    return Object.assign({}, state, {
      [action.groupFrom]: [
        ...auxArray.slice(0, index),
        {
          'id': action.id,
          'title': action.title,
          'description': action.description
        },
        ...auxArray.slice(index)
      ]
    });
  }
};

export default actionHandlers;
