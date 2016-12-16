import {
  ADD_TODO
} from '../../actions/action-creators';

const actionHandlers = {
  [ADD_TODO]: (state, action) => {
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
