import React from 'react';
import CreateTask from './CreateTask';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';

describe('<CreateTask />', () => {

  it('simulates click events', () => {
    const onButtonClick = createSpy();
    const wrapper = shallow(
      <CreateTask addToDo={ onButtonClick } />
    );
    wrapper.find('form').simulate('submit');
    expect(onButtonClick).toHaveBeenCalled();
  });
});
