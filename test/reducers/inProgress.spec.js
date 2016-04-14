import expect from 'expect';
import inProgress from '../../app/reducers/inProgress';

import {
  moveInProgress
} from '../../app/actions/action-creators';

describe('inProgress reducer', () => {
  it('should add a task in progress', () => {
    const before = [];
    const after = [{ id: '1', 'title': 'new task', 'description': 'something to do' }];
    const action = moveInProgress('1', 'new task', 'something to do');

    expect(inProgress(before, action)).toEqual(after);
  });
});
