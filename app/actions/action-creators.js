export const ADD_TODO = 'ADD_TODO';
export const addToDo = (id, title, description) => ({ type: ADD_TODO, id, title, description });

export const MOVE_DONE = 'MOVE_DONE';
export const moveDone = (id, title, description) => ({ type: ADD_TODO, id, title, description });

export const MOVE_INPROGRESS = 'MOVE_INPROGRESS';
export const moveInProgress = (id, title, description) => ({ type: ADD_TODO, id, title, description });
