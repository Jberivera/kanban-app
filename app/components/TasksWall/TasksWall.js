import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './TasksWall.scss';
import classNames from 'classnames/bind';
import {
  moveInProgress,
  moveDone
} from '../../actions/action-creators';

import TaskGroup from '../TaskGroup/TaskGroup';

const css = classNames.bind(styles);

const TasksWall = ({
  toDo,
  inProgress,
  done,
  ...actions
}) => {
  const fromTo = {
    'ToDo': 'InProgress',
    'InProgress': 'Done'
  };

  function onMouseUp({ group, id, title, description }) {
    return function mouseUp(e) {
      const taskGroup = findGroup(e.target);
      e.currentTarget.removeEventListener('mouseup', mouseUp);
      if (taskGroup === fromTo[group]) {
        actions[`move${taskGroup}`](id, title, description);
      }
    }
  }

  function onMouseDown(e) {
    const task = findTask(e.target);
    if (task) {
      let data = {
        group: findGroup(task),
        id: task.getAttribute('data-id'),
        title: task.querySelector('.js-task-title').innerHTML,
        description: task.querySelector('.js-task-description').innerHTML
      };
      e.currentTarget.addEventListener('mouseup', onMouseUp(data));
    }
  }

  function findTask(element) {
    if (element.classList.contains('js-task-group')) {
      return null;
    }
    if (element.tagName === 'LI') {
      return element;
    }
    return findTask(element.parentNode);
  }

  function findGroup(element) {
    if (element.classList.contains('js-task-group')) {
      return element.getAttribute('data-group');
    }
    return findGroup(element.parentNode);
  }

  return (
    <div className={ css('tasks-wall') } onMouseDown={ onMouseDown }>
      <TaskGroup array={ toDo } name="ToDo" />
      <TaskGroup array={ inProgress } name="InProgress" />
      <TaskGroup array={ done} name="Done" />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, state.tasks);
};

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
  moveInProgress,
  moveDone
}, dispatch);

export { TasksWall };
export default connect(mapStateToProps, mapDispatchToProps)(TasksWall);
