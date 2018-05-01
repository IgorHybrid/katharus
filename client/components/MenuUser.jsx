import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

export default class MenuLogin extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Nav pullRight>
        <NavItem eventKey={1} href = '#'>
          Hi, {this.props.user.username}
        </NavItem>
      </Nav>
    );
  }
};
