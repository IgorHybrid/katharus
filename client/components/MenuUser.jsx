import React from 'react';
import axios from 'axios';
import { Nav, NavDropdown, MenuItem } from 'react-bootstrap';

export default class MenuLogin extends React.Component {
  constructor(props){
    super(props);
    this.navtitle = "Hi, " + this.props.user.username;
  }

  render(){
    return (
      <Nav pullRight>
        <NavDropdown title = { this.navtitle }  eventKey = { 1 } id = "dropdown">
          <MenuItem eventKey = { 1.1 }> Profile </MenuItem>
          <MenuItem divider />
          <MenuItem eventKey = { 1.2 } href = "/logout"> Logout </MenuItem>
        </NavDropdown>
      </Nav>
    );
  }
};
