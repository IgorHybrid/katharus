import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

export default class MenuLogin extends React.Component {
  render(){
    return(
      <Nav pullRight>
        <NavItem eventKey={1} href = '/log-in'>
          Log In
        </NavItem>
        <NavItem eventKey={2} href = '/sign-up'>
          Sign Up
        </NavItem>
      </Nav>
    );
  }
};
