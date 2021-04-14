import React, { Component } from 'react';

class EventShow extends Component {
  render() {
    const {
      party_name,
      party_start_time,
      description,
      location,
      user_id,
        } = this.props.party;
    return (
      <>
        <h1>My Events</h1>
        <p>Party Name: { party_name } </p>
        <p>When: { party_start_time }</p>
        <p>Where: { location }</p>
        <p>{ description }</p>
      </>
    );
  }
}

export default EventShow;
