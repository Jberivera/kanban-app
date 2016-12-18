export const EDIT_TASK = 'EDIT_TASK';
export const editTask = (id, groupFrom, title, description) => ({ type: EDIT_TASK, id, groupFrom, title, description });
