import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './TasksWall.scss';
import classNames from 'classnames/bind';
import {
  addToDo,
  moveFromTo
} from '../../actions/action-creators';
import { findTask, findGroup } from '../../js/findUp';
import { getOffsetLeft, getOffsetTop } from '../../js/getOffset';

import TaskGroup from '../TaskGroup/TaskGroup';

const css = classNames.bind(styles);

const TasksWall = ({
  tasks,
  addToDo,
  moveFromTo
}) => {

  function onMouseUp({ elem, groupFrom, id, title, description }) {

    return function mouseUp(e) {
      const groupTo = findGroup(e.target);
      document.body.style.cursor = 'default';
      elem.style.transform = 'none';
      elem.style.position = 'static';
      e.currentTarget.removeEventListener('mouseup', mouseUp);
      e.currentTarget.onmousemove = null;
      moveFromTo(id, title, description, groupFrom, groupTo);
    }
  }

  function onMouseMove(box) {
    let x = 0,
      y = 0,
      left = getOffsetLeft(box) + box.offsetWidth / 2,
      top = getOffsetTop(box) - 10;

    return function mouseMove(e) {
      x = e.x - left;
      y = e.y - top + document.scrollingElement.scrollTop;
      box.style.transform = `translate(${x}px, ${y}px)`;
    }
  }

  function onMouseDown(e) {
    const task = findTask(e.target);
    if (task) {
      const box = task.querySelector('.js-item-box')
      let data = {
        elem: task,
        groupFrom: findGroup(task),
        id: task.getAttribute('data-id'),
        title: task.querySelector('.js-task-title').innerHTML,
        description: task.querySelector('.js-task-description').innerHTML
      };
      box.style.position = 'relative';
      document.body.style.cursor = 'move';
      e.currentTarget.addEventListener('mouseup', onMouseUp(data));
      e.currentTarget.onmousemove = onMouseMove(box);
    }
  }

  return (
    <div className={ css('tasks-wall') } onMouseDown={ onMouseDown }>
      {
        Object.keys(tasks).map((key) => {
          return (
            <TaskGroup key={ key } array={ tasks[key] } name={ key } />
          );
        })
      }
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    tasks: Object.assign({}, state.tasks)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
  addToDo,
  moveFromTo
}, dispatch);

export { TasksWall };
export default connect(mapStateToProps, mapDispatchToProps)(TasksWall);
