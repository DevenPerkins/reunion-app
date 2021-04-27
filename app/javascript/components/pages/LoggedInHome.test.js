import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import LoggedInHome from './LoggedInHome';

Enzyme.configure({ adapter: new Adapter()})

describe('When LoggedInHome renders', () => {
    it('displays LoggedInHome heading', () => {
      const current_user = { first_name: 'Bob' };
      const loggedInHome = shallow(<LoggedInHome current_user={current_user} />);

      const editHeading = loggedInHome.find('h1');

      expect(editHeading.text()).toEqual(`Welcome Bob!`);
    });
  });
