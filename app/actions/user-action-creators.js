export const GET_USER = 'GET_USER';

function getUser(response) {
  return {
    type: GET_USER, response
  };
}

export function getUserAsync() {
  return (dispatch) => {
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        
      } else if (response.status === 'not_authorized') {
        console.log('not_authorized');
      } else {
        console.log('isnt logged in to facebook');
      }
      dispatch(getUser(response));
    });
  };
}

export const FACEBOOK_LOGIN = 'FACEBOOK_LOGIN';

function facebookLogin(response) {
  return {
    type: FACEBOOK_LOGIN, response
  };
}

function facebookApi(dispatch) {
  FB.api('/me', function(response) {
    dispatch(facebookLogin(response));
  });
}

export function facebookLoginAsync() {
  return (dispatch) => {
    FB.login(function(response) {
      if (response.authResponse) {
        facebookApi(dispatch);
      } else {
       console.log('User cancelled login or did not fully authorize.');
      }
    });
  };
}
