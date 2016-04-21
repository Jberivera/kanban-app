import React from 'react';
import { connect } from 'react-redux';
import styles from './Task.scss';
import classNames from 'classnames/bind';

const css = classNames.bind(styles);

const Task = ({ id, title, description }, i) => {
  return (
    <li key={ id } className={ css('task-item') } data-id={ id } data-index={ i }>
      <div className={ css('task-item-box', 'js-item-box') }>
        <a href={ `#${id}` } className={ css('task-item-title', 'js-task-title') } draggable="false">{ title }</a>
        <p className={ css('task-item-description', 'js-task-description') }>{ description }</p>
      </div>
    </li>
  );
}

export default Task;
