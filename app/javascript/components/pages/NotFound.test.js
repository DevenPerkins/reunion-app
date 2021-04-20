import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound';

Enzyme.configure({ adapter: new Adapter()})

describe('When NotFound renders', () => {
    it('displays Edit heading', () => {
      const notFound = shallow(<NotFound />);
  
      const editHeading = notFound.find('h1');
  
      expect(editHeading.text()).toEqual('Not Found');
    });
  });