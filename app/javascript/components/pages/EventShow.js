import React, { Component } from 'react';

class EventShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      event: undefined,
      loadingDrink: true,
      drink: {},
      ingredients:[],
      measurements:[],
    };
  }
  //
  componentDidMount() {
    this.eventShow();
    this.getDrink();
  }

  getDrink = () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((payload) => {
        this.getIngredientsMeasurements(payload.drinks[0])
        this.setState({ drink: payload.drinks[0], loadingDrink: false });
      })
      .catch((errors) => {
        console.log('show drink errors:', errors);
      });
  };

  eventShow = (props) => {
    fetch(`http://localhost:3000/parties/${this.props.id}`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((singleEvent) => {
        this.setState({ event: singleEvent, loading: false });
      })
      .catch((errors) => {
        console.log('show errors:', errors);
      });
  };

  getIngredientsMeasurements = (object) => {
    let ingredients = [];
    let measurements = [];
    for(const [key,value] of Object.entries(object)){
      if(key.startsWith('strIngredient') && value !== null && value !== ''){
        ingredients.push(value)
      }else if(key.startsWith('strMeasure') && value !== null && value !== ''){
        measurements.push(value)
    };
   this.setState({ingredients, measurements});
 };
};
  // listItems = () => {
  //   this.state.event.items.map(item => {
  //     return <li>{item.item_bringing}</li>
  //   })
  // }

  render() {
    const {
      id,
      party_name,
      party_start_time,
      description,
      location,
      user_id,
    } = this.props.party;

    if (!this.state.event) {
      return null;
    }

    const filteredItems = this.state.event.items.filter((item) => {
      return item.user_id != null;
    });

    return (
      <>
        <h1>My Events</h1>
        <p>Party Name: {party_name} </p>
        <p>
          Party ID <small>(for your friends)</small>: {id}
        </p>
        <p>When: {party_start_time}</p>
        <p>Where: {location}</p>
        <p>{description}</p>
        <h1>Guests:</h1>
        <ul>
          {this.state.loading && <li>loading</li>}
          {!this.state.loading &&
            filteredItems.map((item) => {
              return (
                <li key={item.id}>
                  {item.user.first_name} {item.user.last_name} is bringing{' '}
                  {item.item_bringing} which has {item.allergies} as possible
                  allergins
                </li>
              );
            })}
        </ul>
        <h1>Drinks!</h1>
        {this.state.loadingDrink && <p>loading</p>}
        {!this.state.loadingDrink && (
          <>
            <h3>{this.state.drink.strDrink}</h3>
            <img src={this.state.drink.strDrinkThumb} alt='picture of drink' />
            <div style={{display:'inline'}}>
              <ul>
                {this.state.ingredients.map((ingredient, index) => {
                  return (
                    <li key={index}>
                    {ingredient}
                    </li>
                  )
                })}
              </ul>
              <ul>
                {this.state.measurements.map((measurement, index) => {
                  return (
                    <li key={index}>
                    {measurement}
                    </li>
                  )
                })}
              </ul>
            </div>
            <h3>Instructions:</h3>
            <p>{this.state.drink.strInstructions}</p>
          </>
        )}
        <button onClick={this.getDrink}>Get Random Drink</button>
      </>
    );
  }
}

export default EventShow;
