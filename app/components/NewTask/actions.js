import { Observable } from 'rxjs/Observable';
import '../../js/customObservable';
import { database } from '../../js/firebaseApi';

export const ADD_TASK = 'ADD_TASK';
export const addTask = (id, title, description, userUid) => ({ type: ADD_TASK, id, title, description, userUid });

const TASK_STORED = 'TASK_STORED';
const taskStored = () => ({ type: TASK_STORED });

const SET_USER_REJECTED = 'SET_USER_REJECTED';

function setRef (refValue, tasks) {
  const setPromise = database.ref(refValue).set(tasks);

  return Observable.fromPromise(setPromise);
}

export const addTaskEpic = (action$, store) => {
  return action$.ofType(ADD_TASK)
    .flatMap((action) => {
      const { tasks } = store.getState();
      const firstCol = Object.keys(tasks)[0];

      return setRef(`users/${action.userUid}/tasks/${firstCol}/data`, tasks[firstCol].data)
        .mapTo(taskStored())
        .catch(error => Observable.of({
            type: SET_USER_REJECTED,
            payload: error,
            error: true
        }));
    });
};
