import { Observable } from 'rxjs/Observable';
import '../../js/customObservable';
import { database } from '../../js/firebaseApi';

export const ADD_TASK = 'ADD_TASK';
export const addTask = (id, title, description, userUid, tasks) => ({ type: ADD_TASK, id, title, description, userUid, tasks });

const TASK_STORED = 'TASK_STORED';
const taskStored = () => ({ type: TASK_STORED });

const SET_USER_REJECTED = 'SET_USER_REJECTED';

function setRef (refValue, tasks) {
  const setPromise = database.ref(refValue).set(
    Object.keys(tasks).reduce((a, b, i) => {
      return a[i] = { name: b, data: tasks[b] }, a;
    }, [])
  );

  return Observable.fromPromise(setPromise);
}

export const addTaskEpic = (action$) => {
  return action$.ofType(ADD_TASK)
    .debounceTime(500)
    .flatMap((action) =>
      setRef(`users/${action.userUid}/tasks`, action.tasks)
        .mapTo(taskStored())
        .catch(error => Observable.of({
            type: SET_USER_REJECTED,
            payload: error,
            error: true
        }))
    );
};
