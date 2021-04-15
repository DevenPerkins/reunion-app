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
    const filteredItems = this.props.items.filter((item) => {
      return item.user_id != null;
    });

    return (
      <>
        <h1>My Events</h1>
        <p>Party Name: {party_name} </p>
        <p>When: {party_start_time}</p>
        <p>Where: {location}</p>
        <p>{description}</p>
        <h1>Guests:</h1>
        {filteredItems.map((item) => {
          return (
            <p>
              user id: {item.first_name} - {item.item_bringing} -{' '}
              {item.allergies}
            </p>
          );
        })}
      </>
    );
  }
}

export default EventShow;
