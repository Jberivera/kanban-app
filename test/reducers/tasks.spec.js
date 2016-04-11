import expect from 'expect';
import tasks from '../../app/reducers/tasks';

const initialState = {
  toDo: [],
  inProgress: [],
  done: []
};

describe('tasks reducer', () => {
  it('should add a new toDo', () => {
    const after = {
      toDo: [{ id: '1', 'title': 'new task', 'description': 'something to do' }],
      inProgress: [],
      done: []
    };
    const action = { type: 'ADDTODO', id: '1', 'title': 'new task', 'description': 'something to do' }

    expect(tasks(initialState, action)).toEqual(after);
  });
});
