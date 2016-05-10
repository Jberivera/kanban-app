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
    // console.log(this.props.facebookLoginAsync)
    this.props.facebookLoginAsync();
  }

  render () {
    const { user } = this.props;
    return (
      <div className={ css('login') }>
        <div className={ css('status') } onClick={this.onFacebookLogin}>
          { user.res && user.res.name ? user.res.name : 'Login' }
        </div>
        <div onClick={onFacebookOut}>
          facebook Logout
        </div>
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
