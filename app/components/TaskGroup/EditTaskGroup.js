import React, { Component } from 'react';
import styles from './TaskGroup.scss';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  editGroupName
} from './actions';

const css = classNames.bind(styles);

import Task from '../Task/Task';
import NewTask from '../NewTask/NewTask';

import resetInlineStyles from '../../js/resetInlineStyles';

class EditTaskGroup extends Component {

  constructor (props) {
    super(props);
    this.onCancel = this.onCancel.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit (e) {
    e.preventDefault();
    resetInlineStyles(this.groupTitle);
    this.btns.style.display = 'none';
    this.props.editGroupName(this.props.name, this.groupTitle.value.trim());
  }

  onChange (e) {
    if (!e.target.style.paddingRight) {
      e.target.style.paddingRight = '40px';
      this.btns.style.display = 'block';
    }
  }

  onCancel (name) {
    return (e) => {
      this.groupTitle.value = name;
      resetInlineStyles(this.groupTitle);
      this.btns.style.display = 'none';
    };
  }

  render () {
    const { array, name, addbtn, editMode } = this.props;
    return (
      <div className={ css('task-group', 'js-task-group') } data-group={ name }>
        <form className={ css('edit-form') } onSubmit={ this.onSubmit }>
          <input
            className={ css('edit-group-title') }
            type="text"
            defaultValue={name}
            onChange={ this.onChange }
            ref={ (ref) => this.groupTitle = ref } />
          <div className={ css('centered-btns') } ref={ (ref) => this.btns = ref } >
            <input className={ css('save-btn', 'btn') } type="submit" name="save" value="save"></input>
            <span className={ css('cancel-btn', 'btn') } onClick={ this.onCancel(name) }>cancel</span>
          </div>
        </form>
        <ul className={ css('task-group-list', this.name) }>
          {
            array.map((item, i) => {
              return (
                <Task
                  key={ item.id }
                  i={ i }
                  id={ item.id }
                  title={ item.title }
                  description={ item.description }
                />
              );
            })
          }
        </ul>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
  editGroupName
}, dispatch);

export default connect(null, mapDispatchToProps)(EditTaskGroup);
