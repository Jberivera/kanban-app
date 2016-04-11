import React from 'react';
import Hero from './Hero';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';

describe('<Hero />', () => {
  it('has a h1 element', () => {
    const wrapper = shallow(<Hero />);
    expect(wrapper.find('h1').length).toBe(1);
  });
});
