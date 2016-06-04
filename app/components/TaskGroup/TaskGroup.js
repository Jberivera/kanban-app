import React from 'react';
import styles from './TaskGroup.scss';
import classNames from 'classnames/bind';

const css = classNames.bind(styles);

import Task from '../Task/Task';
import NewTask from '../NewTask/NewTask';

const TaskGroup = ({ array, name, addbtn, editMode }) => {

  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className={ css('task-group', 'js-task-group') } data-group={ name }>
      {
        editMode ?
          <form className={ css('edit-form') } onSubmit={ onSubmit }>
            <input className={ css('edit-group-title') } name="groupTitle" type="text" defaultValue={name} />
            <div className={ css('centered-btns') }>
              <input className={ css('save-btn', 'btn') } type="submit" name="save" value="save"></input>
              <span className={ css('cancel-btn', 'btn') } onClick={ onCancel(name) }>cancel</span>
            </div>
          </form>
         :
        <h2 className={ css('task-group-title') }>
         { name }
         {
           addbtn ? <NewTask /> : ''
         }
       </h2>
      }
      <ul className={ css('task-group-list', name) }>
        { array.map(Task) }
      </ul>
    </div>
  );
};

function onCancel(name) {
  return function(e) {
    e.target.parentNode.parentNode.groupTitle.value = name;
  };
}

export default TaskGroup;
