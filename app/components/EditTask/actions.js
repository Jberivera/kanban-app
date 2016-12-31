export const EDIT_TASK = 'EDIT_TASK';
export const editTask = (id, groupFrom, title, description) => ({ type: EDIT_TASK, id, groupFrom, title, description });

export const EDIT_TASK_STORED = 'EDIT_TASK_STORED';
const editTaskStored = () => ({ type: EDIT_TASK_STORED });

export const editTaskEpic = (action$) => {
  return action$.ofType(EDIT_TASK)
    .mapTo(editTaskStored());
};
