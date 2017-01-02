export const ADD_GROUP = 'ADD_GROUP';
export const addGroup = (i) => ({ type: ADD_GROUP, i });

const ADD_GROUP_STORED = 'ADD_GROUP_STORED';
const addGroupStored = () => ({ type: ADD_GROUP_STORED });

export const addGroupEpic = (action$) => {
  return action$.ofType(ADD_GROUP)
    .mapTo(addGroupStored());
};
