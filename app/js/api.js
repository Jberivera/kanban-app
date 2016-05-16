import Firebase from 'firebase';
const ref = new Firebase('https://pandoras-wall.firebaseio.com/users');

const api = {
  'GET_USER': function (next, action) {
    const user = ref.child(action.response.uid);
    return user.child('tasks').once('value').then(function(snapshot) {
      const newAction = {
        type: 'GET_USER',
        response: action.response,
        tasks: snapshot.val()
      };
      return next(newAction);
    });
  }
};

const firebaseMiddleware = store => next => {

  return function (action) {
    if (typeof api[action.type] === 'function') {
      return api[action.type](next, action);
    }
    return next(action);
  };
};

export default firebaseMiddleware;
