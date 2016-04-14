import expect from 'expect';
import addToDo from '../../app/reducers/addToDo';
import {
  addToDo as addToDoCreator
} from '../../app/actions/action-creators';

describe('addToDo reducer', () => {
  it('should add a new toDo', () => {
    const before = [];
    const after = [{ id: '1', 'title': 'new task', 'description': 'something to do' }];
    const action = addToDoCreator('1', 'new task', 'something to do');

    expect(addToDo(before, action)).toEqual(after);
  });
});
