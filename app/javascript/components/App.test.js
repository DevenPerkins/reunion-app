import App from './App';
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './pages/Home';

Enzyme.configure({ adapter: new Adapter()})

describe('When App renders', () => {
  let renderedApp;
  beforeEach(() => {
    // arrange
    renderedApp = shallow(<App />);
  });

  it('displays Header and Footer', () => {
    // act
    // user is looking for header and footer
    const renderedHeader = renderedApp.find('Header');

    const renderedFooter = renderedApp.find('Footer');

    // assert
    expect(renderedHeader.length).toEqual(1);
    expect(renderedFooter.length).toEqual(1);
  });

  it('provides a route with path "/" to Home component', () => {
    // act
    // const renderedHomeRoute = renderedApp.find('Route');
    const renderedHomeRoute = renderedApp.find('[path="/"]');

    // assert
    expect(renderedHomeRoute.length).toEqual(1);
    // console.log(renderedHomeRoute.props());
    expect(renderedHomeRoute.props().component).toEqual(Home);
  });
})