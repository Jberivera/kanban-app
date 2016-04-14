import expect from 'expect';
import kanbanApp from '../../app/reducers/kanbanApp';
import {
  addToDo,
  moveInProgress,
  moveDone
} from '../../app/actions/action-creators';

const initialState = {
  tasks: {
    toDo: [],
    inProgress: [],
    done: []
  }
};

describe('kanbanApp reducer', () => {
  it('should return a initial state if state is not set', () => {
    expect(kanbanApp(undefined, {})).toEqual(initialState);
  });

  it('should add a new toDo', () => {
    const after = {
      tasks: {
        toDo: [{ id: '1', 'title': 'new task', 'description': 'something to do' }],
        inProgress: [],
        done: []
      }
    };
    const action = addToDo('1', 'new task', 'something to do');

    expect(kanbanApp(initialState, action)).toEqual(after);
  });

  it('should move a toDo to inProgress', () => {
    const before = {
      tasks: {
        toDo: [{ id: '1', 'title': 'new task', 'description': 'something to do' }],
        inProgress: [],
        done: []
      }
    };
    const after = {
      tasks: {
        toDo: [],
        inProgress: [{ id: '1', 'title': 'new task', 'description': 'something to do' }],
        done: []
      }
    };
    const action = moveInProgress('1', 'new task', 'something to do');

    expect(kanbanApp(initialState, action)).toEqual(after);
  });

  it('should move an inProgress to Done', () => {
    const before = {
      tasks: {
        toDo: [],
        inProgress: [{ id: '1', 'title': 'new task', 'description': 'something to do' }],
        done: []
      }
    };
    const after = {
      tasks: {
        toDo: [],
        inProgress: [],
        done: [{ id: '1', 'title': 'new task', 'description': 'something to do' }]
      }
    };
    const action = moveDone('1', 'new task', 'something to do');

    expect(kanbanApp(initialState, action)).toEqual(after);
  });
});
