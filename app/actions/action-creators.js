export const ADD_TODO = 'ADD_TODO';
export const addToDo = (id, title, description) => ({ type: ADD_TODO, id, title, description });

export const MOVE_FROM_TO = 'MOVE_FROM_TO';
export const moveFromTo = (id, title, description, groupFrom, groupTo) => ({ type: MOVE_FROM_TO, id, title, description, groupFrom, groupTo });
