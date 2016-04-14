import expect from 'expect';
import kanbanApp from '../../app/reducers/kanbanApp';

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
    const action = { type: 'ADD_TODO', id: '1', 'title': 'new task', 'description': 'something to do' }

    expect(kanbanApp(initialState, action)).toEqual(after);
  });
});
