import React from 'react';
import { connect } from 'react-redux';
import styles from './Task.scss';
import className from 'classname/bind';

const css = className.bind(styles);

const Task = ({ id, title, description }) => {
  return (
    <li key={id} className={css('task-item')}>
      <a href={`#${id}`} className={css('task-item-title')}>{title}</a>
      <p className={css('task-item-description')}>{description}</p>
    </li>
  );
}

export default Task;
