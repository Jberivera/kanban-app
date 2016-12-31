export const ORDER_CHANGE = 'ORDER_CHANGE';
export const orderChange = (id, title, description, groupFrom, index) => ({
  type: ORDER_CHANGE,
  id,
  title,
  description,
  groupFrom,
  index
});

const ORDER_CHANGE_STORED = 'ORDER_CHANGE_STORED';
const orderChangeStored = () => ({ type: ORDER_CHANGE_STORED });

export const orderChangeEpic = (action$) => {
  return action$.ofType(ORDER_CHANGE)
    .mapTo(orderChangeStored());
};

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

const MOVE_FROM_TO_STORED = 'MOVE_FROM_TO_STORED';
const moveFromToStored = () => ({ type: MOVE_FROM_TO_STORED });

export const moveFromToEpic = (action$) => {
  return action$.ofType(MOVE_FROM_TO)
    .mapTo(moveFromToStored());
};
