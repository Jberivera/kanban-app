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
      const task = findTask(e.target);
      const index = task ? task.getAttribute('data-index') : 0;
      document.body.style.cursor = 'default';
      elem.style.transform = 'none';
      elem.style.position = 'static';
      elem.parentNode.firstChild.style.removeProperty('display');
      document.body.classList.remove('drag-active');
      e.currentTarget.removeEventListener('mouseup', mouseUp);
      e.currentTarget.onmousemove = null;
      if (groupFrom !== groupTo) {
        moveFromTo(id, title, description, groupFrom, groupTo, index);
      }
    }
  }

  function onMouseMove(content) {
    let x = 0,
      y = 0;
    return function mouseMove(e) {
      let left = getOffsetLeft(content) + content.offsetWidth / 2,
        top = getOffsetTop(content) - 10;
      x = e.x - left;
      y = e.y - top + document.scrollingElement.scrollTop;
      content.style.transform = `translate(${x}px, ${y}px)`;
    }
  }

  function onMouseDown(e) {
    const task = findTask(e.target);
    if (task) {
      const content = task.querySelector('.js-item-content');
      let data = {
        elem: content,
        groupFrom: findGroup(task),
        id: task.getAttribute('data-id'),
        title: task.querySelector('.js-task-title').innerHTML,
        description: task.querySelector('.js-task-description').innerHTML
      };
      content.style.position = 'relative';
      task.firstChild.style.display = 'none';
      document.body.style.cursor = 'move';
      document.body.classList.add('drag-active');
      e.currentTarget.addEventListener('mouseup', onMouseUp(data));
      e.currentTarget.onmousemove = onMouseMove(content);
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
