import React from 'react';
import { NewTask } from './NewTask';
import expect, { createSpy, spyOn } from 'expect';
import { shallow } from 'enzyme';

describe('<NewTask />', () => {

  it('simulates click event', () => {
    const addToDo = createSpy();
    const wrapper = shallow(
      <NewTask addToDo={ addToDo } count={ 0 } />
    );
    wrapper.find('button').simulate('click');
    expect(addToDo).toHaveBeenCalled();
  });
});
