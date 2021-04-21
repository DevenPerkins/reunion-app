import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class EventIndex extends Component {
  render() {
    return (
      <>
        <h1>Event Index</h1>
        <ul>
          {this.props.parties.map((party) => {
            return (
              <li key={party.id}>
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
      </>
    );
  }
}

export default EventIndex;
