import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addTask
} from './actions';

import style from './NewTask.scss';
import classNames from 'classnames/bind';
import generateKey from '../../js/generateKey';

const css = classNames.bind(style);
const TITLE = 'task';
const DESCRIPTION = 'description';

const NewTask = ({ count, addTask, uid }) => {

  function onClick(e) {
    const key = generateKey(count);
    addTask(key, `${TITLE} ${key}`, DESCRIPTION, uid);
  }

  return (
    <button onClick={ onClick } className={ css('addTask-btn') }>
    </button>
  );
}

const mapStateToProps = ({ tasks, user }, ownProps) => {
  return {
    uid: user.res && user.res.uid,
    count: Object.keys(tasks).reduce((acum, key) => {
      return tasks[key].length + acum;
    }, 0)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
  addTask
}, dispatch);

export { NewTask };
export default connect(mapStateToProps, mapDispatchToProps)(NewTask);
