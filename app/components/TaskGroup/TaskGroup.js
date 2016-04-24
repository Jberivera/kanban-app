import React from 'react';
import styles from './TaskGroup.scss';
import classNames from 'classnames/bind';

const css = classNames.bind(styles);

import Task from '../Task/Task';
import NewTask from '../NewTask/NewTask';

const TaskGroup = ({ array, name, addbtn }) => {
  return (
    <div className={ css('task-group', 'js-task-group') } data-group={ name }>
      <h2 className={ css('task-group-title') }>
        { name }
        {
          addbtn ? <NewTask /> : ''
        }
      </h2>
      <ul className={ css('task-group-list', name) }>
        { array.map(Task) }
      </ul>
    </div>
  );
};

export default TaskGroup;
