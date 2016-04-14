import expect from 'expect';
import tasks from '../../app/reducers/tasks';
import {
  addToDo
} from '../../app/actions/action-creators';

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
    const action = addToDo(1, 'new task', 'something to do');

    expect(tasks(initialState, action)).toEqual(after);
  });
});
