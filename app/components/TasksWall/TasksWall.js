import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './TasksWall.scss';
import classNames from 'classnames/bind';
import {
  orderChange,
  moveFromTo
} from './actions';
import { findTask, findGroup } from '../../js/findUp';
import { getOffsetLeft, getOffsetTop } from '../../js/getOffset';
import resetInlineStyles from '../../js/resetInlineStyles';
import { Observable } from 'rxjs/Observable';

import TaskGroup from '../TaskGroup/TaskGroup';

const css = classNames.bind(styles);
const DRAG_ACTIVE = 'drag-active';

class TasksWall extends Component {

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const mouseDown = Observable.fromEvent(this._wall, 'mousedown');
    const mouseMove = Observable.fromEvent(this._wall, 'mousemove');
    const mouseUp = Observable.fromEvent(this._wall, 'mouseup');

    const mouseDrag = mouseDown
      .flatMap((e) => {
        const task = findTask(e.target);

        return Observable.of(task)
          .filter((task) => task && !task.classList.contains('js-editMode'))
          .map((task) => {
            const content = task.querySelector('.js-item-content');
            let data = {
              elem: content,
              groupFrom: findGroup(task),
              id: task.getAttribute('data-id'),
              title: task.querySelector('.js-task-title').innerHTML,
              description: task.querySelector('.js-task-description').innerHTML
            };
            let left = getOffsetLeft(content) + content.offsetWidth / 2;
            return { task, data, content, left };
          });
      })
      .flatMap((drag) => {
        return mouseMove
          .map((e) => ({ drag, e }))
          .takeUntil(mouseUp);
      });

      const mouseBufferDrag = mouseDrag
        .buffer(mouseUp)
        .filter((arr) => arr.length)
        .map((arr) => arr[arr.length - 1]);

      const mouseDragUp = Observable.zip(
        mouseBufferDrag,
        mouseUp.filter((e) => e.target.classList.contains('g-fake-ondrag')),
        (obj, e) => ({ obj, e })
      );

    mouseDrag.subscribe(({ drag, e }) => {
      const { task, data, content, left } = drag;
      let top = getOffsetTop(content) - 10,
        x = e.x - left,
        y = e.y - top + document.scrollingElement.scrollTop;

      if (!document.body.classList.contains(DRAG_ACTIVE)) {
        document.body.classList.add(DRAG_ACTIVE);
        content.style.position = 'relative';
        task.firstChild.style.display = 'none';
        task.style.background = 'rgba(0, 0, 0, 0.1)';
        document.body.style.cursor = 'move';
      }

      content.style.transform = `translate(${x}px, ${y}px)`;
    });

    mouseDragUp.subscribe(({ obj, e }) => {
      const { elem, groupFrom, id, title, description } = obj.drag.data;
      const groupTo = findGroup(e.target);
      const task = findTask(e.target);
      let index = -1;
      if (task) {
        index = task.getAttribute('data-index');
        resetInlineStyles(task);
      }
      resetInlineStyles(elem, document.body, elem.parentNode.firstChild);
      document.body.classList.remove(DRAG_ACTIVE);

      if (groupFrom !== groupTo) {
        this.props.moveFromTo(id, title, description, groupFrom, groupTo, Number(index));
      } else {
        this.props.orderChange(id, title, description, groupFrom, Number(index));
      }
    });
  }

  render () {
    const { tasks } = this.props;
    return (
      <div className={ css('tasks-wall') } ref={ (elem)=> this._wall = elem }>
        {
          Object.keys(tasks).map((key, i) => {
            return (
              <TaskGroup key={ `task-wall-${key}` } array={ tasks[key].data } groupKey={ key } name={ tasks[key].name } addbtn={ !i }/>
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
  orderChange,
  moveFromTo
}, dispatch);

export { TasksWall };
export default connect(mapStateToProps, mapDispatchToProps)(TasksWall);
