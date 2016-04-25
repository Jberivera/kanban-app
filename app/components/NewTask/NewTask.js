import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addToDo
} from '../../actions/action-creators';

import style from './NewTask.scss';
import classNames from 'classnames/bind';
import generateKey from '../../js/generateKey';

const css = classNames.bind(style);
const TITLE = 'task';
const DESCRIPTION = 'description';

const NewTask = ({ count, addToDo }) => {

  function onClick(e) {
    const key = generateKey(count);
    addToDo(key, `${TITLE} ${key}`, DESCRIPTION);
  }

  return (
    <button onClick={ onClick } className={ css('addTask-btn') }>
    </button>
  );
}

const mapStateToProps = ({ tasks }, ownProps) => {
  return {
    count: Object.keys(tasks).reduce((acum, key) => {
      return tasks[key].length + acum;
    }, 0)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
  addToDo
}, dispatch);

export { NewTask };
export default connect(mapStateToProps, mapDispatchToProps)(NewTask);
