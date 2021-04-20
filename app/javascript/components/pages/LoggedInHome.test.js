import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import LoggedInHome from './LoggedInHome';

Enzyme.configure({ adapter: new Adapter()})

describe('When LoggedInHome renders', () => {
    it('displays LoggedInHome heading', () => {
      const loggedInHome = shallow(<LoggedInHome />);
  
      const editHeading = loggedInHome.find('h1');
  
      expect(editHeading.text()).toEqual('Logged In home');
    });
  });