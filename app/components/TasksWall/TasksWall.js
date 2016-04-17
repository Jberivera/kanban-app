import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './TasksWall.scss';
import classNames from 'classnames/bind';
import {
  moveInProgress,
  moveDone
} from '../../actions/action-creators';

import Task from '../Task/Task';

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
        group: task.parentNode.parentNode.getAttribute('data-group'),
        id: task.getAttribute('data-id'),
        title: task.querySelector('.js-task-title').innerHTML,
        description: task.querySelector('.js-task-description').innerHTML
      };
      e.currentTarget.addEventListener('mouseup', onMouseUp(data));
    }
  }

  function findTask(element) {
    if (element.classList.contains(css('task-group'))) {
      return null;
    }
    if (element.tagName === 'LI') {
      return element;
    }
    return findTask(element.parentNode);
  }

  function findGroup(element) {
    if (element.classList.contains(css('task-group'))) {
      return element.getAttribute('data-group');
    }
    return findGroup(element.parentNode);
  }

  return (
    <div className={ css('tasks-wall') } onMouseDown={ onMouseDown }>
      <div className={ css('task-group') } data-group="ToDo">
        <h2 className={ css('task-group-title') }>toDo</h2>
        <ul className={ css('task-group-list', 'toDo') }>
          { toDo.map(Task) }
        </ul>
      </div>
      <div className={ css('task-group') } data-group="InProgress">
        <h2 className={ css('task-group-title') }>inProgress</h2>
        <ul className={ css('task-group-list', 'inProgress') }>
          { inProgress.map(Task) }
        </ul>
      </div>
      <div className={ css('task-group')} data-group="Done">
        <h2 className={ css('task-group-title') }>Done</h2>
        <ul className={ css('task-group-list', 'done') }>
          { done.map(Task) }
        </ul>
      </div>
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
