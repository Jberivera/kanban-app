export const ORDER_CHANGE = 'ORDER_CHANGE';
export const orderChange = (id, title, description, groupFrom, index) => ({
  type: ORDER_CHANGE,
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
