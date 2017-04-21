import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC2tnPvTqMMsgRPd6OWiQXe1sORwbnzNDo',
  authDomain: 'pandoras-wall.firebaseapp.com',
  databaseURL: 'https://pandoras-wall.firebaseio.com',
  storageBucket: 'pandoras-wall.appspot.com',
};
const firebaseApp = firebase.initializeApp(config); // eslint-disable-line no-unused-vars

const auth = firebase.auth();
const facebook = new firebase.auth.FacebookAuthProvider();

const database = firebase.database();

const LOGIN = 'LOGIN';
const login = (payload) => ({ type: LOGIN, payload });

function setOnAuthStateChange (dispatch) {
  return auth.onAuthStateChanged(function(result) {
    if (result) {
      const { providerData } = result;
      const user = database.ref(`users/${result.uid}`);

      user.child('tasks').once('value').then(function(snapshot) {
        let payload = {
          response: {
            name: providerData[0].displayName,
            url: providerData[0].photoURL,
            uid: result.uid
          }
        };
        if (snapshot.val()) {
          payload.tasks = snapshot.val();
        } else {
          ['toDo', 'inProgress', 'Done'].forEach((key) => {
            user.child('tasks').push({ name: key });
          });
        }
        dispatch(login(payload));
      });
    } else {
      dispatch({ type: 'LOGOUT' });
    }
  });
}

export { auth, facebook, database, setOnAuthStateChange };
