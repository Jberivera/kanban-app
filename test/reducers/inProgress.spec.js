import expect from 'expect';
import inProgress from '../../app/reducers/inProgress';

import {
  moveInProgress,
  moveDone
} from '../../app/actions/action-creators';

describe('inProgress reducer', () => {
  it('should add a task in progress', () => {
    const before = [];
    const after = [{ id: '1', 'title': 'new task', 'description': 'something to do' }];
    const action = moveInProgress('1', 'new task', 'something to do');

    expect(inProgress(before, action)).toEqual(after);
  });

  it('should remove an inProgress to be passed Done', () => {
    const before = [
      { id: '1', 'title': 'new task', 'description': 'something to do' },
      { id: '2', 'title': 'new task', 'description': 'something to do' },
      { id: '3', 'title': 'new task', 'description': 'something to do' }
    ];
    const after = [
      { id: '1', 'title': 'new task', 'description': 'something to do' },
      { id: '3', 'title': 'new task', 'description': 'something to do' }
    ];
    const action = moveDone('2');

    expect(inProgress(before, action)).toEqual(after);
  });
});
