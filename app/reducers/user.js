import createReducer from 'redux-createreducer';
import FB from 'fb';
console.log(FB);
const initialState = {
  user: {}
};

const actionHandlers = {

};
// console.log(FB);

function getLoginStatus() {
    FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      // the user is logged in and has authenticated your
      // app, and response.authResponse supplies
      // the user's ID, a valid access token, a signed
      // request, and the time the access token
      // and signed request each expire
      var uid = response.authResponse.userID;
      console.log(response);
      var accessToken = response.authResponse.accessToken;
      return response;
    } else if (response.status === 'not_authorized') {
      // the user is logged in to Facebook,
      // but has not authenticated your app
      console.log('not_authorized');
      return 'not_authorized';
    } else {
      // the user isn't logged in to Facebook.
      console.log('isnt logged in to facebook');
      return 'not_logged';
    }
  });
}

export default createReducer(initialState, actionHandlers);
