import React from 'react';
import { connect } from 'react-redux';
import style from './Nav.scss';
import classNames from 'classnames/bind';

const css = classNames.bind(style);

import { Login } from '../';
import Dropdown from './Dropdown';
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
    <div className={ css('nav') }>
      <div className={ css('nav-logo') }>
        <h1 className={ css('nav-title') }>
          Pandora’s Wall
        </h1>
      </div>
      <ul className={ css('menu') } >
        {
          items.map((item, i) => <NavBtn key={ i } label={ item.label } to={ item.to } pathname={ pathname === item.to } />)
        }
      </ul>
      <Login />
    </div>
  );
};

function changeActive(e) {
  if (['A', 'SPAN'].indexOf(e.target.tagName) !== -1) {
    const label = e.target.parentNode;

    if (!hasUncheckAttribute(label, e)) {
      const click = new Event('click');
      label.dispatchEvent(click);
    }
  } else {
    hasUncheckAttribute(e.target, e);
  }
}

function hasUncheckAttribute(label, e) {
  if (label.getAttribute('data-uncheck')) {
    const radio = label.parentNode.querySelector('input');

    if (radio.checked) {
      radio.checked = false;
      e.preventDefault();
    }
    return true;
  }
  return false;
}

const mapStateToProps = (state, ownProps) => {
  return {
    pathname: state.routing.locationBeforeTransitions ? state.routing.locationBeforeTransitions.pathname : '/'
  };
};

export default connect(mapStateToProps, null)(Nav);
