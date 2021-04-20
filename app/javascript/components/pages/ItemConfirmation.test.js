import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ItemConfirmation from './ItemConfirmation';

Enzyme.configure({ adapter: new Adapter()})

describe('When ItemConfirmation renders', () => {
    it('displays ItemConfirmation heading', () => {
      const itemConfirmation = shallow(<ItemConfirmation />);
  
      const editHeading = itemConfirmation.find('h1');
  
      expect(editHeading.text()).toEqual('Item Confirmation');
    });
  });