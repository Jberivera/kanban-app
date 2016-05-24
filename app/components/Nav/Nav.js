import React from 'react';
import style from './Nav.scss';
import classNames from 'classnames/bind';

const css = classNames.bind(style);

import { Login } from '../';
import Dropdown from './Dropdown';
import NavBtn from './NavBtn';

const Nav = () => {
  return (
    <div className={ css('nav') } onClick={ unCheckRadios }>
      <div className={ css('nav-logo') }>
        <h1 className={ css('nav-title') }>
          Pandora's Wall
        </h1>
      </div>
      <ul className={ css('menu') } >
        <Dropdown label="Projects" >
          <ul className={ css('dropdown-group') }>
            <li className={ css('dropdown-item') }>Work in progress</li>
          </ul>
        </Dropdown>
        <NavBtn label="Edit Mode" />
      </ul>
      <Login />
    </div>
  );
};

function unCheckRadios(e) {
  if (e.target.getAttribute('data-uncheck')) {
    const radio = e.target.parentNode.querySelector('input');

    if (radio.checked) {
      radio.checked = false;
      e.preventDefault();
    }
  }
}

export default Nav;
