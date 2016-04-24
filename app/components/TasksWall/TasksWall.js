import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './TasksWall.scss';
import taskStyles from '../Task/Task.scss';
import classNames from 'classnames/bind';
import {
  addToDo,
  reOrder,
  moveFromTo
} from '../../actions/action-creators';
import { findTask, findGroup } from '../../js/findUp';
import { getOffsetLeft, getOffsetTop } from '../../js/getOffset';
import resetInlineStyles from '../../js/resetInlineStyles';

import TaskGroup from '../TaskGroup/TaskGroup';

const css = classNames.bind(styles);
const taskCss = classNames.bind(taskStyles);

const TasksWall = ({
  tasks,
  addToDo,
  reOrder,
  moveFromTo
}) => {

  function onMouseUp({ elem, groupFrom, id, title, description }) {

    return function mouseUp(e) {
      const groupTo = findGroup(e.target);
      const task = findTask(e.target);
      let index = -1;
      if (task) {
        index = task.getAttribute('data-index');
        resetInlineStyles(task);
      }
      resetInlineStyles(elem, document.body, elem.parentNode.firstChild);
      document.body.classList.remove(taskCss('drag-active'));
      e.currentTarget.removeEventListener('mouseup', mouseUp);
      e.currentTarget.onmousemove = null;
      if (groupFrom !== groupTo) {
        moveFromTo(id, title, description, groupFrom, groupTo, Number(index));
      } else {
        reOrder(id, title, description, groupFrom, Number(index));
      }
    }
  }

  function onMouseMove(content) {
    let x = 0,
      y = 0,
      left = getOffsetLeft(content) + content.offsetWidth / 2;

    return function mouseMove(e) {
      let top = getOffsetTop(content) - 10;
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
      task.style.background = 'rgba(0, 0, 0, 0.1)';
      document.body.style.cursor = 'move';
      document.body.classList.add(taskCss('drag-active'));
      e.currentTarget.addEventListener('mouseup', onMouseUp(data));
      e.currentTarget.onmousemove = onMouseMove(content);
    }
  }

  return (
    <div className={ css('tasks-wall') } onMouseDown={ onMouseDown }>
      {
        Object.keys(tasks).map((key, i) => {
          return (
            <TaskGroup key={ key } array={ tasks[key] } name={ key } addbtn={ !i }/>
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
  reOrder,
  moveFromTo
}, dispatch);

export { TasksWall };
export default connect(mapStateToProps, mapDispatchToProps)(TasksWall);
