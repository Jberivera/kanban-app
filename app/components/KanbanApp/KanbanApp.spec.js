import React from 'react';
import KanbanApp from './KanbanApp';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';

describe('<KanbanApp />', () => {
  it('has a h1 element', () => {
    const wrapper = shallow(<KanbanApp />);
    expect(wrapper.find('h1').length).toBe(1);
  });
});
