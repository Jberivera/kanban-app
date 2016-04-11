import createReducer from 'redux-createreducer';

const initialState = {
  toDo: []
};

const actionHandlers = {
  'ADDTODO': (state, action) => [...state, {
    'id': action.id,
    'title': action.title,
    'description': action.description
  }]
};

export default createReducer(initialState, actionHandlers);
