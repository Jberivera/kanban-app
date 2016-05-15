import React from 'react';
import style from './Nav.scss';
import classNames from 'classnames/bind';

const css = classNames.bind(style);

import { Login } from '../';

const Nav = () => {
  return (
    <div className={ css('nav') }>
      <h1 className={ css('mainTitle') }>
        Pandora's Wall
      </h1>
      <ul className={ css('menu') }>

      </ul>
      <Login />
    </div>
  );
}

export default Nav;
