import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getUserAsync
} from '../../actions/user-action-creators';

import style from './Login.scss';
import classNames from 'classnames/bind';

const css = classNames.bind(style);

const Login = ({ user, getUserAsync }) => {
  getUserAsync();

  function onFacebookOut(e) {
    FB.logout(function(response) {
      console.log(response);
      // user is now logged out
    });
  }

  function onFacebookLog(e) {
    FB.login(function(response) {
      console.log(response);
      if (response.authResponse) {
       FB.api('/me', function(response) {
         console.log(response);
         console.log('Good to see you, ' + response.name + '.');
       });
      } else {
       console.log('User cancelled login or did not fully authorize.');
      }
    });
  }

  return (
    <div>
      <button onClick={onFacebookLog}>
        facebook Login
      </button>
      <button onClick={onFacebookOut}>
        facebook Logout
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
  getUserAsync
}, dispatch);

export { Login };
export default connect(null, mapDispatchToProps)(Login);
