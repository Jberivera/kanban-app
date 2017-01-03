import {
  ORDER_CHANGE,
  MOVE_FROM_TO,
  orderChangeEpic,
  moveFromToEpic
} from './actions';

const actionHandlers = {
  [MOVE_FROM_TO]: (state, action) => {
    const arrayFrom = state[action.groupFrom].data;
    const arrayTo = state[action.groupTo].data;
    let { index } = action;
    index = index !== -1 ? index : arrayTo.length;
    return Object.assign({}, state, {
      [action.groupFrom]: Object.assign({}, state[action.groupFrom], {
        data: arrayFrom.filter((task) => task.id !== action.id)
      }),
      [action.groupTo]: Object.assign({}, state[action.groupTo], {
        data: [
          ...arrayTo.slice(0, index),
          {
            'id': action.id,
            'title': action.title,
            'description': action.description
          },
          ...arrayTo.slice(index)
        ]
      })
    });
  },
  [ORDER_CHANGE]: (state, action) => {
    const arrayFrom = state[action.groupFrom].data;
    const { index } = action;

    const auxArray = arrayFrom.filter((task) => task.id !== action.id);

    return Object.assign({}, state, {
      [action.groupFrom]: Object.assign({}, state[action.groupFrom], {
        data: [
          ...auxArray.slice(0, index),
          {
            'id': action.id,
            'title': action.title,
            'description': action.description
          },
          ...auxArray.slice(index)
        ]
      })
    });
  }
};

export default actionHandlers;
export { moveFromToEpic, orderChangeEpic };
