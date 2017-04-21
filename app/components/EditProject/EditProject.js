import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from './EditProject.scss';
import classNames from 'classnames/bind';
import {
  addGroup
} from './actions';

const css = classNames.bind(style);

import EditTaskGroup from '../TaskGroup/EditTaskGroup';

class EditProject extends React.Component {
  constructor (props) {
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
      <div className={ css('edit-wall') } onClick={ this.onClickHandler }>
        {
          Object.keys(tasks).reduce((array, key, i) => {
            i === 0 && array.push(<div className={ css('add-group') } key={ `edit-wall-${key + 1}` } data-i={ i }></div>);
            return [
              ...array,
              <EditTaskGroup key={ `edit-wall-${key}` } array={ tasks[key].data } name={ tasks[key].name } />,
              <div className={ css('add-group') } key={ `edit-wall-${key + 2}` } data-i={ i + 1 }></div>
            ];
          }, [])
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: Object.assign({}, state.tasks)
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addGroup
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditProject);
