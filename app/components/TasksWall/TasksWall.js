import React from 'react';
import { connect } from 'react-redux';
import styles from './TasksWall.scss';
import classNames from 'classnames/bind';

import Task from '../Task/Task';

const css = classNames.bind(styles);

const TasksWall = ({ toDo, inProgress, done }) => {

  return (
    <div className={ css('tasks-wall') }>
      <div className={ css('task-group', 'toDo') }>
        <h2 className={ css('task-group-title') }>toDo</h2>
        <ul className={ css('task-group-list') }>
          { toDo.map(Task) }
        </ul>
      </div>
      <div className={ css('task-group', 'inProgress') }>
        <h2 className={ css('task-group-title') }>inProgress</h2>
        <ul className={ css('task-group-list') }>
          { inProgress.map(Task) }
        </ul>
      </div>
      <div className={ css('task-group', 'done') }>
        <h2 className={ css('task-group-title') }>Done</h2>
        <ul className={ css('task-group-list') }>
          { done.map(Task) }
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, state.tasks);
};

export { TasksWall };
export default connect(mapStateToProps, null)(TasksWall);
