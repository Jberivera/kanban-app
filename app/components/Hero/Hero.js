import React from 'react';
import style from './Hero.scss';
import classNames from 'classnames/bind';

const css = classNames.bind(style);

const Hero = () => {
  return (
    <div className={css('hero')}>
      <h1 className={css('mainTitle')}>
        Hello KanbanApp
      </h1>
    </div>
  );
}

export default Hero;
