import React, { Component } from 'react';

class EventShow extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true,
      event: false,
    }
  }
//
componentDidMount(){
  this.eventShow()
}

  eventShow = (props) => {
    fetch(`http://localhost:3000/parties/${this.props.id}`)
      .then((response) => {
        if(response.status === 200){
          return response.json();
        }
      })
      .then((singleEvent) => {
        this.setState({event: singleEvent});
        this.setState({loading: false})
      })
      .catch((errors) => {
        console.log('show errors:', errors);
      });
  };

  // listItems = () => {
  //   this.state.event.items.map(item => {
  //     return <li>{item.item_bringing}</li>
  //   })
  // }

  render() {
    const {
      party_name,
      party_start_time,
      description,
      location,
      user_id,
    } = this.props.party;
    // const filteredItems = this.props.items.filter((item) => {
    //   return item.user_id != null;
    // });

    return (
      <>
        <h1>My Events</h1>
        <p>Party Name: {party_name} </p>
        <p>When: {party_start_time}</p>
        <p>Where: {location}</p>
        <p>{description}</p>
        <h1>Guests:</h1>
        <ul>
          {this.state.loading && <li>loading</li>}
          {!this.state.loading && this.state.event.items.map(item => {
              return <li>{item.user.first_name} {item.user.last_name} is bringing {item.item_bringing} which has {item.allergies} as possible allergins</li>
            })
          }
        </ul>

      </>
    );
  }
}

export default EventShow;
