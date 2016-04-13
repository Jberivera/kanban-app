import React from 'react';
import { connect } from 'react-redux';
import css from './TasksWall.scss';

const TasksWall = ({ toDo, inProgress, done }) => {
  toDo = toDo.map((task) => {
    return (
      <li key={task.id}>
        <a>{task.title}</a>
        <p>{task.description}</p>
      </li>
    );
  });

  inProgress = inProgress.map((task) => {
    return (
      <li key={task.id}>
        <a>{task.title}</a>
        <p>{task.description}</p>
      </li>
    );
  });

  done = done.map((task) => {
    return (
      <li key={task.id}>
        <a>{task.title}</a>
        <p>{task.description}</p>
      </li>
    );
  });

  return (
    <div className={ css['tasks-wall'] }>
      <ul className={ css['task-group'] }>
        <h2>toDo</h2>
        { toDo }
      </ul>
      <ul className={ css['task-group'] }>
        <h2>inProgress</h2>
        { inProgress }
      </ul>
      <ul className={ css['task-group'] }>
        <h2>Done</h2>
        { done }
      </ul>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, state.tasks);
};

export { TasksWall };
export default connect(mapStateToProps, null)(TasksWall);
