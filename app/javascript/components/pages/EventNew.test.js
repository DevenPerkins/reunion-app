import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import EventNew from './eventnew';

Enzyme.configure({ adapter: new Adapter()})

describe('When eventnew renders', () => {
    it('displays create event heading', () => {
      const currentUser= {id: 1}
      const eventNew = shallow(<EventNew createNewEvent={()=>{}}
        current_user={currentUser} />);
  
      const editHeading = eventNew.find('h1');
  
      expect(editHeading.text()).toEqual('Create Event');
    });
  });