import React from 'react';
import TaskGroup from './TaskGroup';
import Task from '../Task/Task';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';

const toDo = [
  { 'id': 1, 'title': 'new task', 'description': 'something to do' },
  { 'id': 2, 'title': 'new task', 'description': 'something to do' },
  { 'id': 3, 'title': 'new task', 'description': 'something to do' },
  { 'id': 4, 'title': 'new task', 'description': 'something to do' },
  { 'id': 5, 'title': 'new task', 'description': 'something to do' },
  { 'id': 6, 'title': 'new task', 'description': 'something to do' }
];

describe('<TaskGroup />', () => {
  it('create li elements', () => {
    const wrapper = shallow(<TaskGroup array={ toDo } name="ToDo" />);
    expect(wrapper.find(Task).length).toBe(6);
  });
});
