import React from 'react';
import styles from './EditTask.scss';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findGroup } from '../../js/findUp';
import {
  editTask
} from '../../actions/action-creators';

const css = classNames.bind(styles);

const EditTask = ({ id, title, description, editTask }) => {

  function onClick(e) {
    e.target.parentNode.parentNode.classList.toggle('js-editMode');
  };

  function onSubmit(e) {
    const { title, description } = e.currentTarget;
    const groupFrom = findGroup(e.target);
    e.preventDefault();
    e.currentTarget.parentNode.parentNode.classList.remove('js-editMode');

    editTask(id, groupFrom, title.value, description.value);
  }

  return (
    <div className={ css('editMode-wrapper') }>
      <button className={ css('editMode-btn', 'g-editMode-btn') } onClick={ onClick }>
        edit
      </button>
      <form className={ css('edit-form', 'g-edit-form') } onSubmit={ onSubmit }>
        <input className={ css('edit-title') } type="text" name="title" defaultValue={ title }></input>
        <textarea className={ css('edit-description') } name="description" defaultValue={ description } rows="3"></textarea>
        <input type="submit" value="save"></input>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
  editTask
}, dispatch);

export { EditTask };
export default connect(null, mapDispatchToProps)(EditTask);
