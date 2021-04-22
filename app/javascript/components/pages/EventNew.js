import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import './EventNew.scss';

class EventNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        party_name: '',
        party_start_time: '',
        location: '',
        description: '',
        user_id: this.props.current_user.id,
      },
      submitted: false,
    };
  }
  handleChange = (e) => {
    let { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
  };

  handleSubmit = () => {
    this.props.createNewEvent(this.state.form);
    this.setState({ submitted: true });
  };

  render() {
    const { form, submitted } = this.state;
    return (
      <>
        <h1 className='h1-styles'>Create Event</h1>
        <Col className='column-text' md={{ size: 10, offset: 1 }}>
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for='party_name'>Event Name</Label>
                  <Input
                    type='text'
                    name='party_name'
                    placeholder='Enter Event Name'
                    value={form.party_name}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for='party_start_time'>When?</Label>
                  <Input
                    type='text'
                    name='party_start_time'
                    placeholder='Enter Start Time'
                    value={form.party_start_time}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for='location'>Where?</Label>
              <Input
                type='text'
                name='location'
                placeholder="Where's the party??"
                value={form.location}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for='description'>Description</Label>
              <Input
                type='textarea'
                name='description'
                placeholder="What's going on at the party???"
                value={form.description}
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button onClick={this.handleSubmit}>Continue</Button>
          </Form>
        </Col>
        {this.state.submitted && <Redirect to='/itemnew' />}
      </>
    );
  }
}

export default EventNew;
