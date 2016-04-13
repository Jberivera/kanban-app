import React from 'react';
import { connect } from 'react-redux';
import css from './Task.scss';

const Task = (task) => {
  return (
    <li key={task.id}>
      <a href={`#${task.id}`}>{task.title}</a>
      <p>{task.description}</p>
    </li>
  );
}

export default Task;
