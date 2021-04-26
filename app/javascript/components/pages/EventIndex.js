import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Parallax } from 'react-parallax';

class EventIndex extends Component {
  render() {
    return (
      <>
        <Parallax
          bgImage={
            'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
          }
          bgImageAlt='the cat'
          strength={200}
        >
          <h1 className='h1-styles'>My Events</h1>
          <ul className='index-ul'>
            {this.props.parties.map((party) => {
              return (
                <li key={party.id} className='card-margin'>
                  <Card body outline color='secondary'>
                    <CardTitle tag='h5'>
                      {party.party_name} - Party ID: {party.id}
                    </CardTitle>
                    <CardText>{party.party_start_time}</CardText>
                    <NavLink to={`/eventshow/${party.id}`}>
                      <Button>View Event</Button>
                    </NavLink>
                  </Card>
                </li>
              );
            })}
          </ul>
          <h1 className='h1-styles'>Attending Events</h1>
          <ul className='index-ul'>
            {this.props.itemsParty.map((party, id) => {
              return (
                <li key={id} className='card-margin'>
                  <Card body outline color='secondary'>
                    <CardTitle tag='h5'>
                      {party.party.party_name} - Party ID: {party.party.id}
                    </CardTitle>
                    <CardText>{party.party_start_time}</CardText>
                    <NavLink to={`/eventshow/${party.party.id}`}>
                      <Button>View Event</Button>
                    </NavLink>
                  </Card>
                </li>
              );
            })}
          </ul>
        </Parallax>
      </>
    );
  }
}

export default EventIndex;
