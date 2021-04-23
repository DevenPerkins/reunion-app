import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AboutUs from './AboutUs';

Enzyme.configure({ adapter: new Adapter() });

describe('When AboutUs renders', () => {
  it('displays Edit heading', () => {
    const aboutUs = shallow(<AboutUs />);

    const editHeading = aboutUs.find('h1');

    expect(editHeading.text()).toEqual('About us');
  });
});
