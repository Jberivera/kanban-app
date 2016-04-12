import React from 'react';
import { connect } from 'react-redux';
import './CreateTask.scss';

const CreateTask = ({ addToDo }) => {

  function onSubmit(e) {
    const { title, description } = e.currentTarget;
    e.preventDefault();

    addToDo(Date.now(), title.value, description.value);
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

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, state);
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToDo: (id, title, description) => {
      dispatch({ type: 'ADDTODO', id: id, 'title': title, 'description': description });
    }
  };
};

export { CreateTask };
export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);
