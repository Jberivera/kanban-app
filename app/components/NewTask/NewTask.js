import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addTask
} from './actions';

import style from './NewTask.scss';
import classNames from 'classnames/bind';
import uuid from 'uuid/v1';

const css = classNames.bind(style);
const TITLE = 'new task';
const DESCRIPTION = 'description';

class NewTask extends Component {
  constructor (props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick (e) {
    const { addTask, uid } = this.props;
    const key = uuid();

    addTask(key, `${TITLE}`, DESCRIPTION, uid);
  }

  render () {
    return (
      <button onClick={ this.onClick } className={ css('addTask-btn') } />
    );
  }
}

const mapStateToProps = ({ tasks, user }, ownProps) => {
  return {
    uid: user.res && user.res.uid
  };
};

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
  addTask
}, dispatch);

export { NewTask };
export default connect(mapStateToProps, mapDispatchToProps)(NewTask);
