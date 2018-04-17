import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Menu extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Katharus</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href = '/'>
              Home
            </NavItem>
            <NavItem eventKey={2} href = '/about'>
              About Us
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href = '/log-in'>
              Log In
            </NavItem>
            <NavItem eventKey={2} href = '/sign-up'>
              Sign Up
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
