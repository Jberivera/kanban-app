export const ADD_TODO = 'ADD_TODO';
export const addToDo = (id, title, description) => ({ type: ADD_TODO, id, title, description });

export const RE_ORDER = 'RE_ORDER';
export const reOrder = (id, title, description, groupFrom, index) => ({
  type: RE_ORDER,
  id,
  title,
  description,
  groupFrom,
  index
});

export const MOVE_FROM_TO = 'MOVE_FROM_TO';
export const moveFromTo = (id, title, description, groupFrom, groupTo, index) => ({
  type: MOVE_FROM_TO,
  id,
  title,
  description,
  groupFrom,
  groupTo,
  index
});
