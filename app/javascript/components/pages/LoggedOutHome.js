import React, { Component } from 'react';
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
} from 'reactstrap';
import Testimonial from '../components/testimonial';
import './LoggedOutHome.scss';

class LoggedOutHome extends Component {
  render() {
    return (
      <>
        <div>
          <Jumbotron fluid className='jumbotron'>
            <Container fluid className='jumbo-container'>
              <h1 className='display-3'>Welcome to the Reunion App</h1>
              <p className='lead'>Sign in to create your party</p>
            </Container>
          </Jumbotron>
        </div>
        <div className='card1'>
          <Row>
            <Col sm='6'>
              <Card body>
                <CardTitle className='cardbody' tag='h1'>
                  Features
                </CardTitle>
              </Card>
            </Col>
            <Col sm='6'>
              <Card body>
                <CardTitle className='cardbody' tag='h5'>
                  Guests can respond with an RSVP by choosing and item selected
                  by a host to bring{' '}
                </CardTitle>
              </Card>
            </Col>
          </Row>
        </div>
        <br />
        <div className='card1'>
          <Row>
            <Col sm='6'>
              <Card body>
                <CardTitle className='cardbody' tag='h5'>
                  {' '}
                  You will be able to easily set up a party and create items for
                  guests to be responsible for bringing in order to make your
                  party a hit. Let Reunion take the headache out of organizing a
                  party so there are no more party fouls!
                </CardTitle>
              </Card>
            </Col>
            <Col sm='6'>
              <Card body>
                <CardTitle className='cardbody' tag='h1'>
                  {' '}
                  More Features{' '}
                </CardTitle>
              </Card>
            </Col>
          </Row>
        </div>
        <br />
        <div className='card1'>
          <Row>
            <Col sm='6'>
              <Card body>
                <CardTitle className='cardbody' tag='h1'>
                  But wait theres more!
                </CardTitle>
              </Card>
            </Col>
            <Col sm='6'>
              <Card body>
                <CardTitle className='cardbody' tag='h5'>
                  {' '}
                  Looking to make a splash at the event? Check out our drink
                  generator on your event page to add some flavor to the event.{' '}
                </CardTitle>
              </Card>
            </Col>
          </Row>
        </div>
        <br />
        <hr />
        <div className='testimonial-text'>
          <h1>Testimonials</h1>
        </div>
        <div className='testimonial'>
          <Testimonial />
        </div>
      </>
    );
  }
}

export default LoggedOutHome;
