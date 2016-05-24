import React from 'react';
import style from './Nav.scss';
import classNames from 'classnames/bind';

const css = classNames.bind(style);

function NavBtn({ label }) {
  const menuLabel = `menu-item-${label}`;
  return (
    <li className={ css('menu-item') }>
      <input type="radio" id={ menuLabel } name="nav-menu-btn" className={ css('menu-check') } />
      <label htmlFor={ menuLabel } className={ css('menu-label') }>
        <span className={ css('menu-label-btn') }>{ label }</span>
      </label>
    </li>
  );
}

export default NavBtn;
