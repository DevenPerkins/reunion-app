import React, { Component } from 'react';
import {
  NavLink,
  FormGroup,
  Form,
  Label,
  Input,
  Button,
  Row,
  Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';

class LoggedInHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setPartyID: null,
    };
  }

  searchParty = (event) => {
    this.setState({ setPartyID: event.target.value });
  };

  render() {
    return (
      <>
        <h1 className='h1-styles'>
          Welcome {this.props.current_user.first_name}!
        </h1>
        <Row>
          <Col xs='6'>
            <h3>My Events</h3>
            <NavLink tag={Link} to='/eventindex'>
              <Button>My Events</Button>
            </NavLink>
          </Col>
          <Col xs='6'>
            <h3>Make an Event!</h3>
            <NavLink tag={Link} to='/eventnew'>
              <Button>Make Event</Button>
            </NavLink>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm='12' md={{ size: 6, offset: 3 }}>
            <h3>Find an Event!</h3>
            <Form>
              <FormGroup>
                <Label for='itemConfirmationID'>Find Party</Label>
                <Input
                  type='search'
                  name='itemConfirmationID'
                  onChange={this.searchParty}
                  placeholder='Enter Party ID'
                />
              </FormGroup>
              <NavLink
                tag={Link}
                to={`/itemconfirmation/${this.state.setPartyID}`}
              >
                <Button>Go</Button>
              </NavLink>
            </Form>
          </Col>
        </Row>
      </>
    );
  }
}

export default LoggedInHome;
