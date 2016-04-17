import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addToDo
} from '../../actions/action-creators';

import './NewTaskForm.scss';

const NewTaskForm = ({ addToDo }) => {

  function onSubmit(e) {
    const { title, description } = e.currentTarget;
    e.preventDefault();

    addToDo(Date.now().toString(), title.value, description.value);
  }

  return (
    <form onSubmit={ onSubmit }>
      <label>Title</label>
      <input type="text" name="title"></input>
      <label>description</label>
      <textarea name="description" rows="4" cols="50"></textarea>
      <input type="submit" value="add toDo"></input>
    </form>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
  addToDo
}, dispatch);

export { NewTaskForm };
export default connect(null, mapDispatchToProps)(NewTaskForm);
