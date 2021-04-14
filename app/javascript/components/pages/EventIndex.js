import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

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
                  <CardTitle tag='h5'>{party.party_name}</CardTitle>
                  <CardText>{party.party_start_time}</CardText>
                  <Button>View Event</Button>
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
