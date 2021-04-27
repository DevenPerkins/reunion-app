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
    const mockParty1 = [{ id: 1 },{ id: 4 }]
    const mockParty2 = [{
      party:{
        party_name: 'party',
        id: 2}
    },{
      party:{
        party_name: 'party 2',
        id: 3 }
    }]
    const eventIndex = shallow(<EventIndex
      parties={mockParty1}
      itemsParty={mockParty2}/>);

    const editHeading = eventIndex.find('h1');

    expect(editHeading).not.toBeUndefined();

  });
});
