import React from 'react';
import TaskGroup from './TaskGroup';
import Task from '../Task/Task';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';

const toDo = [
  { 'title': 'new task', 'description': 'something to do' },
  { 'title': 'new task', 'description': 'something to do' },
  { 'title': 'new task', 'description': 'something to do' },
  { 'title': 'new task', 'description': 'something to do' },
  { 'title': 'new task', 'description': 'something to do' },
  { 'title': 'new task', 'description': 'something to do' }
];

describe('<TaskGroup />', () => {
  it('create li elements', () => {
    const wrapper = shallow(<TaskGroup array={ toDo } name="ToDo" />);
    expect(wrapper.find(Task).length).toBe(6);
  });
});
