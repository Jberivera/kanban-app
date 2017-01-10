import { Observable } from 'rxjs/Observable';
import '../../js/customObservable';
import { database } from '../../js/firebaseApi';

export const ADD_TASK = 'ADD_TASK';
export const addTask = (task, userUid) => ({ type: ADD_TASK, task, userUid });

export const TASK_STORED = 'TASK_STORED';
export const taskStored = (task, key) => ({ type: TASK_STORED, task, key });

const SET_USER_REJECTED = 'SET_USER_REJECTED';

function pushTask (refValue, task) {
  const pushPromise = new Promise(function (resolve, reject) {
    const ref = database.ref(refValue).push(task);
    resolve(ref.key);
  });

  return Observable.fromPromise(pushPromise);
}

export const addTaskEpic = (action$, store) => {
  return action$.ofType(ADD_TASK)
    .flatMap(({ task, userUid }) => {
      const { tasks } = store.getState();
      const firstCol = Object.keys(tasks)[0];

      return pushTask(`users/${userUid}/tasks/${firstCol}/data`, task)
        .map(function (key) {
          return taskStored(task, key);
        })
        .catch(error => Observable.of({
            type: SET_USER_REJECTED,
            payload: error,
            error: true
        }));
    });
};
