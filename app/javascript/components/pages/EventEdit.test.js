import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import EventEdit from './eventedit';

Enzyme.configure({ adapter: new Adapter()})

describe('When eventedit renders', () => {
    it('displays Edit heading', () => {
      const eventedit = shallow(<EventEdit />);
  
      const editHeading = eventedit.find('h1');
  
      expect(editHeading.text()).toEqual('event edit');
    });
  });