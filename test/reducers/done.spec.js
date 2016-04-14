import expect from 'expect';
import done from '../../app/reducers/done';

import {
  moveDone
} from '../../app/actions/action-creators';

describe('done reducer', () => {
  it('should add a task in done', () => {
    const before = [];
    const after = [{ id: '1', 'title': 'new task', 'description': 'something to do' }];
    const action = moveDone('1', 'new task', 'something to do');

    expect(done(before, action)).toEqual(after);
  });
});
