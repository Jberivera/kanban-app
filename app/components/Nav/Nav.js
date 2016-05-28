import React from 'react';
import style from './Nav.scss';
import classNames from 'classnames/bind';

const css = classNames.bind(style);

import { Login } from '../';
import Dropdown from './Dropdown';
import NavBtn from './NavBtn';

const Nav = () => {
  return (
    <div className={ css('nav') } onClick={ changeActive }>
      <div className={ css('nav-logo') }>
        <h1 className={ css('nav-title') }>
          Pandora’s Wall
        </h1>
      </div>
      <ul className={ css('menu') } >
        <NavBtn label="Wall" to="/wall" checked={true} />
        <NavBtn label="Edit Mode" to="/edit-mode" />
        <Dropdown label="Menu" />
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

export default Nav;
