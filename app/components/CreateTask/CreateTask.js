import React from 'react';
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
      <input type="text" name="description"></input>
      <input type="submit" value="add toDo"></input>
    </form>
  );
}

export default CreateTask;
