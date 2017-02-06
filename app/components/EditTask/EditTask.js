import React, { Component } from 'react';
import styles from './EditTask.scss';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findGroup, findTask } from '../../js/findUp';
import {
  editTask
} from './actions';

const css = classNames.bind(styles);

class EditTask extends Component {
  constructor (props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }

  editModeHandler (e) {
    const editBtn = e.target;
    const editModeWrapper = editBtn.parentNode;
    const taskDescription = editModeWrapper.parentNode.querySelector('.js-task-description');
    const textArea = editModeWrapper.querySelector('textarea');
    const style = window.getComputedStyle(taskDescription);

    const paddingBottom = (/\d+/).exec(style.getPropertyValue('padding-bottom')).pop();

    textArea.style.height = `${taskDescription.offsetHeight - paddingBottom + 10}px`;
    editModeWrapper.parentNode.classList.add('js-editMode');
  }

  cancelHandler (e) {
    const task = findTask(e.target);
    task.classList.remove('js-editMode');
  }

  submitHandler (e) {
    const { title, description } = e.currentTarget;
    const { id, editTask } = this.props;
    const groupFrom = findGroup(e.target);

    e.preventDefault();
    e.currentTarget.parentNode.parentNode.classList.remove('js-editMode');

    this.props.editTask(id, groupFrom, title.value, description.value);
  }

  render () {
    const { title, description } = this.props;

    return (
      <div className={ css('editMode-wrapper') }>
        <button className={ css('editMode-btn', 'g-editMode-btn') } onClick={ this.editModeHandler }>
          edit
        </button>
        <form className={ css('edit-form', 'g-edit-form') } onSubmit={ this.submitHandler }>
          <input className={ css('edit-title') } type="text" name="title" defaultValue={ title }></input>
          <textarea className={ css('edit-description') } name="description" defaultValue={ description }></textarea>
          <div className={ css('centered-btns') }>
            <input className={ css('save-btn', 'btn') } type="submit" name="save" value="save"></input>
            <span className={ css('cancel-btn', 'btn') } onClick={ this.cancelHandler }>cancel</span>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
  editTask
}, dispatch);

export { EditTask };
export default connect(null, mapDispatchToProps)(EditTask);
