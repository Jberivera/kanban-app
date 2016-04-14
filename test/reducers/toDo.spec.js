import expect from 'expect';
import toDo from '../../app/reducers/toDo';
import {
  addToDo
} from '../../app/actions/action-creators';

describe('toDo reducer', () => {
  it('should add a new toDo', () => {
    const before = [];
    const after = [{ id: '1', 'title': 'new task', 'description': 'something to do' }];
    const action = addToDo(1, 'new task', 'something to do');

    expect(toDo(before, action)).toEqual(after);
  });
});
