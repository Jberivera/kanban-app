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

import Social from './Social';
import UserInfo from './UserInfo';

class Login extends Component {

  constructor(props) {
    super(props);

    this.onFacebookLogin = this.onFacebookLogin.bind(this);
    this.onFacebookOut = this.onFacebookOut.bind(this);
  }

  componentWillMount() {
    this.props.getUserAsync();
  }

  onFacebookLogin(e) {
    this.props.facebookLoginAsync();
  }
  onFacebookOut(e) {
    FB.logout((response) => {
      this.props.getUserAsync();
    });
  }

  userNameFixed(name) {
    return name.split(' ', 2).join(' ').slice(0, 13);
  }

  render () {
    const { user } = this.props;
    let accountStyles = {};

    if (user.res && user.res.data) {
      accountStyles = {
        backgroundImage: `url(${user.res.data.url})`,
        color: 'transparent'
      }
    }

    return (
      <div className={ css('login') }>
        <input type="checkbox" className={ css('status-check') } id="status" />
        <label className={ css('status') } htmlFor="status">
          <i className={ css('account-circle', 'material-icons')}
            style={accountStyles}>account_circle</i>
        </label>
        <div className={ css('social-menu') }>
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
  getUserAsync,
  facebookLoginAsync
}, dispatch);

export { Login };
export default connect(mapStateToProps, mapDispatchToProps)(Login);
