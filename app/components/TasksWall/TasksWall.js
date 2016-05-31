import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './TasksWall.scss';
import classNames from 'classnames/bind';
import {
  reOrder,
  moveFromTo
} from '../../actions/action-creators';
import { findTask, findGroup } from '../../js/findUp';
import { getOffsetLeft, getOffsetTop } from '../../js/getOffset';
import resetInlineStyles from '../../js/resetInlineStyles';

import TaskGroup from '../TaskGroup/TaskGroup';

const css = classNames.bind(styles);
const DRAG_ACTIVE = 'drag-active';

class TasksWall extends Component {

  constructor (props) {
    super(props);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
  }

  onMouseUp ({ elem, groupFrom, id, title, description }) {
    let mouseUp;
    return  mouseUp = (e) => {
      const groupTo = findGroup(e.target);
      const task = findTask(e.target);
      let index = -1;
      if (task) {
        index = task.getAttribute('data-index');
        resetInlineStyles(task);
      }
      resetInlineStyles(elem, document.body, elem.parentNode.firstChild);
      document.body.classList.remove(DRAG_ACTIVE);
      e.currentTarget.removeEventListener('mouseup', mouseUp);
      e.currentTarget.onmousemove = null;
      if (groupFrom !== groupTo) {
        this.props.moveFromTo(id, title, description, groupFrom, groupTo, Number(index));
      } else {
        this.props.reOrder(id, title, description, groupFrom, Number(index));
      }
    };
  }

  onMouseMove (task, content) {
    let x = 0,
      y = 0,
      left = getOffsetLeft(content) + content.offsetWidth / 2;

    return function mouseMove(e) {
      if (!document.body.classList.contains(DRAG_ACTIVE)) {
        document.body.classList.add(DRAG_ACTIVE);
        content.style.position = 'relative';
        task.firstChild.style.display = 'none';
        task.style.background = 'rgba(0, 0, 0, 0.1)';
        document.body.style.cursor = 'move';
      }
      let top = getOffsetTop(content) - 10;
      x = e.x - left;
      y = e.y - top + document.scrollingElement.scrollTop;
      content.style.transform = `translate(${x}px, ${y}px)`;
    }
  }

  onMouseDown (e) {
    const task = findTask(e.target);
    if (task && !task.classList.contains('js-editMode')) {
      const content = task.querySelector('.js-item-content');
      let data = {
        elem: content,
        groupFrom: findGroup(task),
        id: task.getAttribute('data-id'),
        title: task.querySelector('.js-task-title').innerHTML,
        description: task.querySelector('.js-task-description').innerHTML
      };
      e.currentTarget.addEventListener('mouseup', this.onMouseUp(data));
      e.currentTarget.onmousemove = this.onMouseMove(task, content);
    }
  }

  render () {
    const { tasks } = this.props;
    return (
      <div className={ css('tasks-wall') } onMouseDown={ this.onMouseDown }>
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
}

const mapStateToProps = (state, ownProps) => {
  return {
    tasks: Object.assign({}, state.tasks)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
  reOrder,
  moveFromTo
}, dispatch);

export { TasksWall };
export default connect(mapStateToProps, mapDispatchToProps)(TasksWall);
