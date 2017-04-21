import React from 'react';
import { connect } from 'react-redux';
import style from './Nav.scss';
import classNames from 'classnames/bind';

const css = classNames.bind(style);

import { Login } from '../';
import NavBtn from './NavBtn';

const items = [
  {
    label: 'Wall',
    to: '/wall'
  },
  {
    label: 'Edit Mode',
    to: '/edit-mode'
  }
];

const Nav = ({ pathname }) => {
  return (
    <div className={ css('nav') } >
      <div className={ css('nav-logo') } >
        <h1 className={ css('nav-title') } >
          Pandora’s Wall
        </h1>
      </div>
      <ul className={ css('menu') } >
        {
          items.map((item) => (
            <NavBtn key={ `${item.label}-${item.to}` } label={ item.label } to={ item.to } pathname={ pathname === item.to } />
          ))
        }
      </ul>
      <Login />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pathname: state.router.location ? state.router.location.pathname : '/'
  };
};

export { Nav };
export default connect(mapStateToProps, null)(Nav);
