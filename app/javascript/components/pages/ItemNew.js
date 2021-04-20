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
    this.setState({ submitted: true });
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
        <h1>Add needed item</h1>
        <Form inline>
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
          <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
            <Label for='allergies' className='mr-sm-2'>
              Allergens?
            </Label>
            <Input
              type='text'
              name='allergies'
              placeholder='ex. Gluten'
              value={form.allergies}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button onClick={this.handleSubmit}>Add item</Button>
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
        <NavLink to={`/eventshow/${party_id}`}>Continue to event page</NavLink>
      </>
    );
  }
}

export default ItemNew;
