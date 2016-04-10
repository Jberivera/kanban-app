import createReducer from 'redux-createreducer';

const initialState = {
  toDo: []
};

const actionHandlers = {
  'ADDTODO': (state, action) => [...state, {
    'title': action.title,
    'description': action.description
  }]
};

export default createReducer(initialState, actionHandlers);
