import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  logOut,
  facebookLoginAsync
} from '../../actions/user-action-creators';

import style from './Login.scss';
import classNames from 'classnames/bind';

const css = classNames.bind(style);

import Social from './Social';
import UserInfo from './UserInfo';

class Login extends Component {

  constructor(props) {
    super(props);

    this.onFacebookLogin = this.onFacebookLogin.bind(this);
    this.onFacebookOut = this.onFacebookOut.bind(this);
    this.openMenuHandler = this.openMenuHandler.bind(this);

    this.state = {
      open: false
    };
  }

  onFacebookLogin(e) {
    this.props.facebookLoginAsync();
  }

  onFacebookOut(e) {
    this.props.logOut();
  }

  openMenuHandler(e) {
    this.setState({
      open: !this.state.open
    });
  }

  userNameFixed(name) {
    return name.split(' ', 2).join(' ').slice(0, 13);
  }

  render () {
    const { user } = this.props;
    const { open } = this.state;

    let accountStyles = {};

    if (user.res && user.res.url) {
      accountStyles = {
        backgroundImage: `url(${user.res.url})`,
        color: 'transparent'
      }
    }

    return (
      <div className={ css('login') }>
        <label className={ css('status') } onClick={ this.openMenuHandler }>
          <i className={ css('account-circle', 'material-icons')}
            style={ accountStyles }>
              account_circle
          </i>
        </label>
        <div className={ css('social-menu', open && 'social-menu--open') }>
          {
            user.res && user.res.name ?
              <UserInfo
                userName={ this.userNameFixed(user.res.name)}
                onFacebookOut={ this.onFacebookOut } /> :
              <Social
                onFacebookLogin={this.onFacebookLogin}
                onFacebookOut={ this.onFacebookOut } />
          }
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, {
    user: state.user
  });
};

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
  logOut,
  facebookLoginAsync
}, dispatch);

export { Login };
export default connect(mapStateToProps, mapDispatchToProps)(Login);
