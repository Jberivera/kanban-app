import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from './EditProject.scss';
import classNames from 'classnames/bind';
import {
  addGroup
} from './actions';

const css = classNames.bind(style);

import TaskGroup from '../TaskGroup/EditTaskGroup';

function EditProject({ tasks, addGroup }) {
  function onClick(e) {
    const i = e.target.getAttribute('data-i');
    if (i) {
      addGroup(i);
    }
  }
  return (
    <div className={ css('edit-wall') } onClick={ onClick }>
      {
        Object.keys(tasks).reduce((a, b, i) => {
          i === 0 ? a.push(<div className={ css('add-group') } key={ i } data-i={ i }></div>) : '';
          return (
            a.push(<TaskGroup key={ b } array={ tasks[b] } name={ b } />),
            a.push(<div className={ css('add-group') } key={ i + 1 } data-i={ i + 1}></div>),
            a
          );
        }, [])
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
  addGroup
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditProject);
