import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';

class EventShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      event: undefined,
      loadingDrink: true,
      drink: {},
      ingredients: [],
      measurements: [],
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
        this.getIngredientsMeasurements(payload.drinks[0]);
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
    for (const [key, value] of Object.entries(object)) {
      if (key.startsWith('strIngredient') && value !== null && value !== '') {
        ingredients.push(value);
      } else if (
        key.startsWith('strMeasure') &&
        value !== null &&
        value !== ''
      ) {
        measurements.push(value);
      }
      this.setState({ ingredients, measurements });
    }
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
        <Container>
          <Row>
            <Col>
              <h1 className='h1-styles'>{party_name}</h1>
              <p>
                Party ID <small>(for your friends)</small>: {id}
              </p>
              <p>
                When: {party_start_time} | Where: {location}
              </p>
              <p>{description}</p>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h3 className='h3-styles'>Guests:</h3>
              <ListGroup className='list-style'>
                {this.state.loading && <li>loading</li>}
                {!this.state.loading &&
                  filteredItems.map((item) => {
                    return (
                      <ListGroupItem key={item.id}>
                        {item.user.first_name} {item.user.last_name} is bringing{' '}
                        {item.item_bringing}{' '}
                        {item.allergies
                          ? `which has ${item.allergies} as
                        possible allergins`
                          : null}
                      </ListGroupItem>
                    );
                  })}
              </ListGroup>
            </Col>
            <Col md={6}>
              <Card className='card-box-shadow'>
                {this.state.loadingDrink && <p>loading</p>}
                {!this.state.loadingDrink && (
                  <>
                    <CardImg
                      top
                      width='100%'
                      src={this.state.drink.strDrinkThumb}
                      alt='Cocktail image'
                    />
                    <CardBody className='cardbody-styles'>
                      <CardTitle tag='h5'>
                        {this.state.drink.strDrink}
                      </CardTitle>
                      <CardSubtitle>
                        {this.state.drink.strInstructions}
                      </CardSubtitle>
                      <Row>
                        <Col md={6}>
                          <ul>
                            {this.state.ingredients.map((ingredient, index) => {
                              return <li key={index}>{ingredient}</li>;
                            })}
                          </ul>
                        </Col>
                        <Col md={6}>
                          <ul>
                            {this.state.measurements.map(
                              (measurement, index) => {
                                return <li key={index}>{measurement}</li>;
                              }
                            )}
                          </ul>
                        </Col>
                      </Row>

                      <Button onClick={this.getDrink}>Get Random Drink</Button>
                    </CardBody>
                  </>
                )}
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default EventShow;
