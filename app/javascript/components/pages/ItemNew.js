import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
} from 'reactstrap';

class ItemNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        item_bringing: '',
        allergies: '',
        party_id: this.props.party_id,
        user_id: null,
      },
      submitted: false,
    };
  }

  static getDerivedStateFromProps = (props, state) => {
    return {
      form: {
        ...state.form,
        party_id: props.party_id,
      },
    };
  };

  handleChange = (e) => {
    let { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
  };

  handleSubmit = () => {
    this.props.createNewItem(this.state.form);
    this.setState({ submitted: true, form: { item_bringing: '' }});
  };

  render() {
    const { form, submitted } = this.state;
    const { items, party_id } = this.props;
    let filteredItems;
    if (items.length === 0) {
      filteredItems = false;
    } else {
      filteredItems = items.filter((item) => {
        return item.party_id === this.props.party_id;
      });
    }
    return (
      <>
      <h1 className='h1-styles item-h1'>Add needed items for event</h1>
        <Col className='col-align' sm="12" md={{ size: 7, offset: 3 }}>
          <Form>
            <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
              <Label for='item_bringing' className='mr-sm-2'>
                Item needed:
              </Label>
              <Input
                type='text'
                name='item_bringing'
                placeholder='ex. Hamburger Buns'
                value={form.item_bringing}
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <Button className='button-styles' onClick={this.handleSubmit}>Add item</Button>
          </Form>
          <ListGroup>
            {filteredItems ? (
              filteredItems.map((item) => {
                return (
                  <ListGroupItem key={item.id}>
                    {item.item_bringing}
                  </ListGroupItem>
                );
              })
            ) : (
              <ListGroupItem>Please Add Items</ListGroupItem>
            )}
          </ListGroup>
          </Col>
          <NavLink to={`/eventshow/${party_id}`}>
          <Button className='button-styles'>Continue to event page
          </Button>
          </NavLink>

      </>
    );
  }
}

export default ItemNew;
