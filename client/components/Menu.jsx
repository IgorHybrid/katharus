import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Cookies from 'universal-cookie';


//Login and logout components
import MenuLogin from './MenuLogin.jsx';
import MenuUser  from './MenuUser.jsx';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    const cookies = new Cookies();
    console.log(cookies.get('user'));
    this.state = {
      user: cookies.get('user') || null
    }
  }

  render() {
    var { user } = this.state;
    console.log(user);
    var logMenu;
    if(user){
      logMenu = <MenuUser user = { user }/>;
    }else{
      logMenu = <MenuLogin />;
    }
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
          {logMenu}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
