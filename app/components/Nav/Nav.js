import React from 'react';
import style from './Nav.scss';
import classNames from 'classnames/bind';

const css = classNames.bind(style);

const Nav = () => {
  return (
    <div className={css('hero')}>
      <h1 className={css('mainTitle')}>
        Hello KanbanApp
      </h1>
    </div>
  );
}

export default Nav;
