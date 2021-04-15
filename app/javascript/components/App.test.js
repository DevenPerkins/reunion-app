import App from './App';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe('When App renders', () => {
  let renderedApp;
  beforeEach(() => {
    renderedApp = shallow(<App />);
  });
  it('displays Header and Footer', () => {
    const renderedHeader = renderedApp.find('Header');
    const renderedFooter = renderedApp.find('Footer');
    expect(renderedHeader.length).toEqual(1)
    expect(renderedFooter.length).toEqual(1)
  })
})
