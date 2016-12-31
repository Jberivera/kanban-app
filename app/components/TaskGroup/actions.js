export const EDIT_GROUP_NAME = 'EDIT_GROUP_NAME';
export const editGroupName = (nameFrom, nameTo) => ({ type: EDIT_GROUP_NAME, nameFrom, nameTo });

const GROUP_NAME_SAVED = 'GROUP_NAME_SAVED';
const groupNameSaved = () => ({ type: GROUP_NAME_SAVED });

export const editGroupNameEpic = (action$) => {
  return action$.ofType(EDIT_GROUP_NAME)
    .mapTo(groupNameSaved());
};
