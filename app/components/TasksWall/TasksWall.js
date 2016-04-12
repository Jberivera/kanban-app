import React from 'react';
import { connect } from 'react-redux';
import './TasksWall.scss';

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
    <div className='TasksWall'>
      <ul>
        { toDo }
      </ul>
      <ul>
        { inProgress }
      </ul>
      <ul>
        { done }
      </ul>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { toDo, inProgress, done } = state.tasks;

  return {
    toDo: toDo,
    inProgress: inProgress,
    done: done
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch({ type: 'INCREMENT' });
    }
  };
};

export { TasksWall };
export default connect(mapStateToProps, mapDispatchToProps)(TasksWall);
