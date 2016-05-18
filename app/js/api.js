import Firebase from 'firebase';
const ref = new Firebase('https://pandoras-wall.firebaseio.com/users');

const api = {
  'GET_USER': function (next, action) {
    if (action.response) {
      const user = ref.child(action.response.uid);
      return user.child('tasks').once('value').then(function(snapshot) {
        let newAction = {
          type: 'GET_USER',
          response: action.response
        };
        if (snapshot.val()) {
          newAction.tasks = snapshot.val().reduce((a, b) => {
            return a[b.name] = b.data || [], a;
          }, {});
        } else {
          user.child('tasks').set([
            {
              name: 'toDo'
            },
            {
              name: 'inProgress'
            },
            {
              name: 'Done'
            }
          ]);
        }
        return next(newAction);
      });
    }
    return next(action);
  },
  'ADD_TODO': setFireBaseTasks,
  'EDIT_TASK': setFireBaseTasks,
  'MOVE_FROM_TO': setFireBaseTasks,
  'RE_ORDER': setFireBaseTasks
};

function setFireBaseTasks(next, action, store) {
  next(action);
  const state = Object.assign({}, store.getState());

  ref.child(state.user.res.uid).child('tasks').set(
    Object.keys(state.tasks).reduce((a, b, i) => {
      return a[i] = { name: b, data: state.tasks[b] }, a;
    }, [])
  );
}

const firebaseMiddleware = store => next => {

  return function (action) {
    if (typeof api[action.type] === 'function') {
      return api[action.type](next, action, store);
    }
    return next(action);
  };
};

export default firebaseMiddleware;
