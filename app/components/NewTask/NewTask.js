import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addToDo
} from '../../actions/action-creators';

import style from './NewTask.scss';
import classNames from 'classNames/bind';

const css = classNames.bind(style);
const TITLE = 'new to do';
const DESCRIPTION = 'description';

const NewTaskForm = ({ addToDo }) => {

  function onClick(e) {
    addToDo(Date.now().toString(), TITLE, DESCRIPTION);
  }

  return (
    <button onClick={ onClick }>
      +
    </button>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
  addToDo
}, dispatch);

export { NewTaskForm };
export default connect(null, mapDispatchToProps)(NewTaskForm);
