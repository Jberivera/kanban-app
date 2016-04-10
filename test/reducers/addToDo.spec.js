import expect from 'expect';
import addToDo from '../../app/reducers/addToDo';

describe('addToDo reducer', () => {
  it('should add a new toDo', () => {
    const before = [];
    const after = [{ 'title': 'new task', 'description': 'something to do' }];
    const action = { type: 'ADDTODO', 'title': 'new task', 'description': 'something to do' }

    expect(addToDo(before, action)).toEqual(after);
  });
});
