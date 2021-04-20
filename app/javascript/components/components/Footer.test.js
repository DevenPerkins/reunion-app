import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer';

Enzyme.configure({ adapter: new Adapter()})

describe('When Footer renders', () => {
    it('displays footer heading', () => {
      const footer = shallow(<Footer />);
  
      const editHeading = footer.find('h1');
  
      expect(editHeading.text()).toEqual('Footer');
    });
  });