export const ADD_TASK = 'ADD_TASK';
export const addTask = (id, title, description) => ({ type: ADD_TASK, id, title, description });

export const TASK_STORED = 'TASK_STORED';
export const taskStored = () => ({ type: TASK_STORED });

export const addTaskEpic = (action$) => {
  return action$.ofType(ADD_TASK)
    .debounceTime(500)
    .mapTo(taskStored());
};
