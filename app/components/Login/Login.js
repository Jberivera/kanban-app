import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getUserAsync,
  facebookLoginAsync
} from '../../actions/user-action-creators';

import style from './Login.scss';
import classNames from 'classnames/bind';

const css = classNames.bind(style);

class Login extends Component {

  constructor(props) {
    super(props);
    props.getUserAsync();

    this.onFacebookLogin = this.onFacebookLogin.bind(this);
  }

  onFacebookLogin(e) {
    this.props.facebookLoginAsync();
  }

  render () {
    const { user } = this.props;
    return (
      <div className={ css('login') }>
        <input type="checkbox" className={ css('status-check') } id="status" />
        <label className={ css('status') } htmlFor="status">
          { user.res && user.res.name ? user.res.name : 'Login' }
        </label>
        <ul className={ css('social-menu') }>
          <li className={ css('fb-btn') } onClick={this.onFacebookLogin}>Facebook</li>
        </ul>
      </div>
    );
  }
};

function onFacebookOut(e) {
  FB.logout(function(response) {
    console.log(response);
    // user is now logged out
  });
}

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, {
    user: state.user
  });
};

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
  getUserAsync,
  facebookLoginAsync
}, dispatch);

export { Login };
export default connect(mapStateToProps, mapDispatchToProps)(Login);
