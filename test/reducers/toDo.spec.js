import expect from 'expect';
import toDo from '../../app/reducers/toDo';

import {
  addToDo,
  moveInProgress
} from '../../app/actions/action-creators';

describe('toDo reducer', () => {
  it('should add a new task toDo', () => {
    const before = [];
    const after = [{ id: '1', 'title': 'new task', 'description': 'something to do' }];
    const action = addToDo(1, 'new task', 'something to do');

    expect(toDo(before, action)).toEqual(after);
  });

  it('should remove a toDo to be passed inProgress', () => {
    const before = [
      { id: '1', 'title': 'new task', 'description': 'something to do' },
      { id: '2', 'title': 'new task', 'description': 'something to do' },
      { id: '3', 'title': 'new task', 'description': 'something to do' }
    ];
    const after = [
      { id: '1', 'title': 'new task', 'description': 'something to do' },
      { id: '3', 'title': 'new task', 'description': 'something to do' }
    ];
    const action = moveInProgress('2');

    expect(toDo(before, action)).toEqual(after);
  });
});
