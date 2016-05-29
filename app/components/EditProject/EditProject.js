import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from './EditProject.scss';
import classNames from 'classnames/bind';

const css = classNames.bind(style);

import TaskGroup from '../TaskGroup/TaskGroup';

function EditProject({ tasks }) {
  return (
    <div className={ css('edit-wall') }>
      {
        Object.keys(tasks).map((key, i) => {
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

// const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
//   addToDo,
//   reOrder,
//   moveFromTo
// }, dispatch);

export default connect(mapStateToProps, null)(EditProject);
