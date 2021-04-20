import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header';

Enzyme.configure({ adapter: new Adapter()})

describe('When Header renders', () => {
    it('displays header heading', () => {
      const header = shallow(<Header />);
  
      const editHeading = header.find('div');
  
      expect(editHeading.text()).toEqual('<Navbar />');
    });
  });
  describe('When header renders', () => {
    const header = shallow(<Header />);
    const headerNav = header.find('Nav');
    
    it('has clickable links', () => {
      expect(headerNav.length).toEqual(1);
    })
  });
  