import Firebase from 'firebase';

const ref = new Firebase('https://pandoras-wall.firebaseio.com/');

export const GET_USER = 'GET_USER';

export function logOut() {
  ref.unauth();
  return { type: 'LOGOUT' };
}

function getUser(response) {
  return {
    type: GET_USER, response
  };
}

export function getUserAsync() {
  return (dispatch) => {
    ref.onAuth(function (authData) {
      if (authData) {
        console.log(authData);
        dispatch(getUser({
          name: authData[authData.provider].displayName,
          url: authData[authData.provider].profileImageURL
        }));
      } else {
        dispatch(getUser(null));
      }
    });
  };
}

export function facebookLoginAsync() {
  return (dispatch) => {
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      dispatch(getUser({
        name: authData[authData.provider].displayName,
        url: authData[authData.provider].profileImageURL
      }));
    });
  };
}
