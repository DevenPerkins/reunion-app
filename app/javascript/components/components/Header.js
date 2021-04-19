import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  FormGroup,
  Form,
  Label,
  Input,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const {
    logged_in,
    current_user,
    new_user_route,
    sign_in_route,
    sign_out_route,
  } = props;

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Reunion</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {
              !logged_in &&
              <>
              <NavItem>
                <NavLink href={ new_user_route }>Sign Up</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href={ sign_in_route }>Sign In</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/aboutus">About Us</NavLink>
              </NavItem>
              </>
            }
            {
              logged_in &&
              <>
              <NavItem>
                <NavLink href={ sign_out_route }>Sign Out</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ Link } to="/eventindex">My Events</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ Link } to="/eventnew">Make Event</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/aboutus">About Us</NavLink>
              </NavItem>
              <Form>
                <FormGroup>
                  <Label for="itemConfirmationID">Find Party</Label>
                  <Input
                  type="search"
                  name="itemConfirmationID"

                  placeholder="Enter Party ID"/>
                  </FormGroup>
                </Form>
              </>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
