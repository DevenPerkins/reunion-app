import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Container, Col } from 'reactstrap';

class ItemConfirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        id: undefined,
        allergies: '',
        party_id: this.props.party_id,
        item_bringing: '',
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

  handleSubmit = async () => {
    await this.props.updateItem(this.state.form, this.state.form.id);
    this.setState({ submitted: true });
  };

  render() {
    const unclaimedItems = this.props.items.filter((item) => {
      return item.user_id === null;
    });
    return (
      <>
      <Container>
        <Form>
        <h1 className='h1-styles item-h1'>Select Item To RSVP</h1>
        <Col className='col-align' sm='12' md={{ size: 6, offset: 3 }}>
          <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
            <Label for='exampleSelect'>Select:</Label>
            <Input
              type='select'
              name='item_bringing'
              value={this.state.form.id}
              onChange={(e) => {
                const item_bringing = unclaimedItems.find(
                  (item) => item.id == e.target.value
                ).item_bringing;
                this.setState({
                  form: {
                    ...this.state.form,
                    id: e.target.value,
                    item_bringing,
                  },
                });
              }}
            >
              <option>Pick one:</option>
              {unclaimedItems.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.item_bringing}
                  </option>
                );
              })}
            </Input>
          </FormGroup>
          <br />
          <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
            <Label for='allergies' className='mr-sm-2'>
              Possible Allergens:
            </Label>
            <Input
              type='text'
              name='allergies'
              placeholder='Ex. Peanuts'
              value={this.state.form.allergies}
              onChange={this.handleChange}
            />
          </FormGroup>
          </Col>
          <Button className='button-styles' onClick={this.handleSubmit}>🎉🎉Lets Go Party!🎉🎉</Button>
        </Form>
        </Container>
        {this.state.submitted && (
          <Redirect to={`/eventshow/${this.props.party_id}`} />
        )}
      </>
    );
  }
}

export default ItemConfirmation;
