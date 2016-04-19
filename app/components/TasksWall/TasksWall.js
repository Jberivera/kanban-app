import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './TasksWall.scss';
import classNames from 'classnames/bind';
import {
  moveInProgress,
  moveDone
} from '../../actions/action-creators';
import { findTask, findGroup } from '../../js/findUp';
import { getOffsetLeft, getOffsetTop } from '../../js/getOffset';

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

  function onMouseUp({ elem, group, id, title, description }) {
    return function mouseUp(e) {
      const taskGroup = findGroup(e.target);
      document.body.style.cursor = 'default';
      elem.style.transform = 'none';
      elem.style.position = 'static';
      e.currentTarget.removeEventListener('mouseup', mouseUp);
      e.currentTarget.onmousemove = null;
      if (taskGroup === fromTo[group]) {
        actions[`move${taskGroup}`](id, title, description);
      }
    }
  }

  function onMouseMove(task) {
    let x = 0,
      y = 0,
      left = getOffsetLeft(task),
      top = getOffsetTop(task) - 10;
    return function mouseMove(e) {
      x = e.x - left;
      y = e.y - top + document.scrollingElement.scrollTop;
      task.style.transform = `translate(${x}px, ${y}px)`;
    }
  }

  function onMouseDown(e) {
    const task = findTask(e.target);
    if (task) {
      let data = {
        elem: task,
        group: findGroup(task),
        id: task.getAttribute('data-id'),
        title: task.querySelector('.js-task-title').innerHTML,
        description: task.querySelector('.js-task-description').innerHTML
      };
      task.style.position = 'relative';
      document.body.style.cursor = 'move';
      e.currentTarget.addEventListener('mouseup', onMouseUp(data));
      e.currentTarget.onmousemove = onMouseMove(task);
    }
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
