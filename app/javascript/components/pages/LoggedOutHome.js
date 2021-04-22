import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Card, CardTitle, CardText} from 'reactstrap';
import Testimonial from '../components/testimonial';
import './LoggedOutHome.scss';



class LoggedOutHome extends Component {
  render() {
    return (
      <>
        <div>
        <Jumbotron fluid className="jumbotron">
        <Container fluid className="jumbo-container">
          <h1 className="display-3">Welcome to the Reunion App</h1>
          <p className="lead">Sign in to create your party</p>
        </Container>
      </Jumbotron>
      </div>
      <div className= "card1">
      <Row>
     <Col sm="6">
       <Card body>
         <CardTitle className="cardbody" tag="h1">Features</CardTitle>
       </Card>
     </Col>
     <Col sm="6">
       <Card body>
         <CardTitle className="cardbody" tag="h5"> asdf asdf asdfas ddfasdf asdfasdf asdf asdf asdf  asdfasdf asdfasdf asdfasdf lorem ipsum la;ksdjf sadf asdf sdf sdf  sdfasdf </CardTitle>
       </Card>
     </Col>
   </Row>
      </div>
      <br />
      <div className= "card1">
      <Row>
     <Col sm="6">
       <Card body>
         <CardTitle className="cardbody" tag="h5">asdf asdf asdfas ddfasdf asdfasdf asdf asdf asdf  asdfasdf asdfasdf asdfasdf lorem ipsum la;ksdjf sadf asdf sdf sdf  sdfasdf</CardTitle>
       </Card>
     </Col>
     <Col sm="6">
       <Card body>
         <CardTitle className="cardbody" tag="h1"> More Features </CardTitle>
       </Card>
     </Col>
   </Row>
   </div>
   <br/>
  <div className= "card1">
   <Row>
    <Col sm="6">
      <Card body>
        <CardTitle className="cardbody" tag="h1">But wait theres more!</CardTitle>
      </Card>
    </Col>
    <Col sm="6">
      <Card body>
        <CardTitle className="cardbody" tag="h5"> asdf asdf asdfas ddfasdf asdfasdf asdf asdf asdf  asdfasdf asdfasdf asdfasdf lorem ipsum la;ksdjf sadf asdf sdf sdf  sdfasdf</CardTitle>
      </Card>
    </Col>
    </Row>
   </div>
   <hr />
   <div className="testimonial-text">
     <h1>Testimonials</h1>
   </div>
   <div className="testimonial">
    <Testimonial  />
  </div>
  <hr />
      </>
    );
  }
}

export default LoggedOutHome;
