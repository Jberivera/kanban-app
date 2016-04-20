import React from 'react';
import styles from './TaskGroup.scss';
import classNames from 'classnames/bind';

const css = classNames.bind(styles);

import Task from '../Task/Task';

const TaskGroup = ({ array, name }) => {
  name = `${name[0].toUpperCase()}${name.slice(1)}`;

  return (
    <div className={ css('task-group', 'js-task-group') } data-group={ name }>
      <h2 className={ css('task-group-title') }>{ name }</h2>
      <ul className={ css('task-group-list', name) }>
        { array.map(Task) }
      </ul>
    </div>
  );
};

export default TaskGroup;
