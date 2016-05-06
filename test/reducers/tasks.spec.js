import expect from 'expect';
import reducer from '../../app/reducers/tasks';
import {
  addToDo,
  moveFromTo
} from '../../app/actions/action-creators';

const initialState = {
  toDo: [],
  inProgress: [],
  Done: []
};

describe('tasks reducer', () => {
  it('should add a new toDo', () => {
    const after = {
      toDo: [{ id: '1', 'title': 'new task', 'description': 'something to do' }],
      inProgress: [],
      Done: []
    };
    const action = addToDo('1', 'new task', 'something to do');

    expect(reducer(initialState, action)).toEqual(after);
  });

  it('should move a toDo to inProgress', () => {
    const before = {
      toDo: [{ id: '1', 'title': 'new task', 'description': 'something to do' }],
      inProgress: [],
      Done: []
    };
    const after = {
      toDo: [],
      inProgress: [{ id: '1', 'title': 'new task', 'description': 'something to do' }],
      Done: []
    };
    const action = moveFromTo('1', 'new task', 'something to do', 'toDo', 'inProgress');

    expect(reducer(before, action)).toEqual(after);
  });

  it('should move an inProgress to Done', () => {
    const before = {
      toDo: [],
      inProgress: [{ id: '1', 'title': 'new task', 'description': 'something to do' }],
      Done: []
    };
    const after = {
      toDo: [],
      inProgress: [],
      Done: [{ id: '1', 'title': 'new task', 'description': 'something to do' }]
    };
    const action = moveFromTo('1', 'new task', 'something to do', 'inProgress', 'Done');

    expect(reducer(before, action)).toEqual(after);
  });
});
