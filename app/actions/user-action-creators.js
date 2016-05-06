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
        var uid = response.authResponse.userID;
        console.log(response);
        var accessToken = response.authResponse.accessToken;
      } else if (response.status === 'not_authorized') {
        console.log('not_authorized');
      } else {
        console.log('isnt logged in to facebook');
      }
      dispatch(getUser(response));
    });
  };
}
