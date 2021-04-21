import App from './App';
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import LoggedInHome from './pages/LoggedInHome';
import LoggedOutHome from './pages/LoggedOutHome';

Enzyme.configure({ adapter: new Adapter()})

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(),
  })
);

describe('When App renders', () => {
  let renderedApp;
  beforeEach(() => {
    // arrange
    fetch.mockImplementationOnce(() => Promise.resolve({
    json: () => Promise.resolve([{ party_name:'banana', party_start_time:'never', location:'here', description:'something' }]),
  }))
  fetch.mockImplementationOnce(() => Promise.resolve({
  json: () => Promise.resolve([{ item_bringing:'something', allergies:'none', party_id:1, user_id:1 }]),
}))
    renderedApp = shallow(<App logged_in={false} />);
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
    expect(renderedHomeRoute.props().component).toEqual(LoggedOutHome);
  });
})
