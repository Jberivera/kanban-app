import React from 'react';
import { connect } from 'react-redux';
import css from './TasksWall.scss';

import Task from '../Task/Task';

const TasksWall = ({ toDo, inProgress, done }) => {

  return (
    <div className={ css['tasks-wall'] }>
      <ul className={ css['task-group'] }>
        <h2>toDo</h2>
        { toDo.map(Task) }
      </ul>
      <ul className={ css['task-group'] }>
        <h2>inProgress</h2>
        { inProgress.map(Task) }
      </ul>
      <ul className={ css['task-group'] }>
        <h2>Done</h2>
        { done.map(Task) }
      </ul>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, state.tasks);
};

export { TasksWall };
export default connect(mapStateToProps, null)(TasksWall);
