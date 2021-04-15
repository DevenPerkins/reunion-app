import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EventIndex from './EventIndex';

Enzyme.configure({ adapter: new Adapter() });

test('it works', () => {
  expect(1).toBe(1);
});
