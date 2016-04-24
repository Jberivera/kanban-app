import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addToDo
} from '../../actions/action-creators';

import style from './NewTask.scss';
import classNames from 'classnames/bind';

const css = classNames.bind(style);
const TITLE = 'new';
const DESCRIPTION = 'description';

const NewTask = ({ addToDo }) => {

  function onClick(e) {
    addToDo(Date.now().toString(), TITLE, DESCRIPTION);
  }

  return (
    <button onClick={ onClick } className={ css('addTask-btn') }>
    </button>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
  addToDo
}, dispatch);

export { NewTask };
export default connect(null, mapDispatchToProps)(NewTask);
