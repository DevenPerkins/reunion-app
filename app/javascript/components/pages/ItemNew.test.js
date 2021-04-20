import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ItemNew from './ItemNew';
import items from '../MockItems';
import parties from '../MockParties';

Enzyme.configure({ adapter: new Adapter()})

describe('When ItemNew renders', () => {
    it('displays ItemNew heading', () => {
      const itemNew = shallow(<ItemNew createNewItem={()=>{}}
        items={items}
        party_id={{id:1}}  />);
  
      const editHeading = itemNew.find('h1');
  
      expect(editHeading.text()).toEqual('Add needed item');
    });
  });