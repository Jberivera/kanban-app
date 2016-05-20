import { auth, facebook, database } from '../js/api';

export const GET_USER = 'GET_USER';

export function logOut() {
  auth.signOut();
  return { type: 'LOGOUT' };
}

function getUser(response) {
  return {
    type: GET_USER, response
  };
}

export function facebookLoginAsync() {
  return (dispatch) => {
    auth.signInWithPopup(facebook).then(function(result) {
      const { providerData } = result.user;
      dispatch(getUser({
        name: providerData[0].displayName,
        url: providerData[0].photoURL,
        uid: result.user.uid
      }));
    }).catch(function(error) {
      dispatch(getUser(null));
    });
  };
}

function getProfileUrl(authData) {
  if (authData.provider === 'facebook') {
    return `https://graph.facebook.com/${authData.facebook.id}/picture?type=square`;
  }
}
