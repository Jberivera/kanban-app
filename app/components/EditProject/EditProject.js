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

function EditProject() {
  contructor (props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler (e) {
    const i = e.target.getAttribute('data-i');
    if (i) {
      this.props.addGroup(i);
    }
  }

  render () {
    const { tasks } = this.props;

    return (
      <div className={ css('edit-wall') } onClick={ onClickHandler }>
        {
          Object.keys(tasks).reduce((array, key, i) => {
            i === 0 && array.push(<div className={ css('add-group') } key={ i } data-i={ i }></div>);
            return [
              ...array,
              <TaskGroup key={ `edit-wall-${key}` } array={ tasks[key].data } name={ tasks[key].name } />,
              <div className={ css('add-group') } key={ i + 1 } data-i={ i + 1}></div>
            ];
          }, [])
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
  addGroup
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditProject);
