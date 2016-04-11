import React from 'react';
import './Tasks.scss';

const Tasks = ({ toDo, inProgress, done }) => {
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
    <div className='tasks'>
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

export default Tasks;
