import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EventIndex from './EventIndex';
import parties from '../MockParties'

Enzyme.configure({ adapter: new Adapter() });

test('it works', () => {
  expect(1).toBe(1);
});

describe('When eventindex renders', () => {
  it('displays index heading', () => {
    const eventIndex = shallow(<EventIndex parties={parties}/>);

    const editHeading = eventIndex.find('h1');

    expect(editHeading.text()).toEqual('Event Index');
  });
});