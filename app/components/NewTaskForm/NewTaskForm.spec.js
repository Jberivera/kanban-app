import React from 'react';
import { NewTaskForm } from './NewTaskForm';
import expect, { createSpy, spyOn } from 'expect';
import { shallow } from 'enzyme';

describe('<NewTaskForm />', () => {

  it('simulates submit event', () => {
    const addToDo = createSpy();
    const preventDefault = createSpy();
    const e = { preventDefault, currentTarget: {
      title: '',
      description: ''
    }};

    const wrapper = shallow(
      <NewTaskForm addToDo={ addToDo } />
    );
    const form = wrapper.find('form');
    form.simulate('submit', e);
    expect(addToDo).toHaveBeenCalled();
    expect(preventDefault).toHaveBeenCalled();
  });
});
