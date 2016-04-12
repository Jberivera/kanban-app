import React from 'react';
import { TasksWall } from './TasksWall';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';

const tasks = {
  toDo: [
    { 'title': 'new task', 'description': 'something to do' },
    { 'title': 'new task', 'description': 'something to do' }
  ],
  inProgress: [
    { 'title': 'new task', 'description': 'something to do' },
    { 'title': 'new task', 'description': 'something to do' }
  ],
  done: [
    { 'title': 'new task', 'description': 'something to do' },
    { 'title': 'new task', 'description': 'something to do' }
  ]
}

describe('<TasksWall />', () => {
  it('has a three ul elements', () => {
    const wrapper = shallow(<TasksWall toDo={ tasks.toDo } inProgress={ tasks.inProgress } done={ tasks.done }/>);
    expect(wrapper.find('ul').length).toBe(3);
  });

  it('create li elements', () => {
    const wrapper = shallow(<TasksWall toDo={ tasks.toDo } inProgress={ tasks.inProgress } done={ tasks.done }/>);
    expect(wrapper.find('li').length).toBe(6);
  });
});
