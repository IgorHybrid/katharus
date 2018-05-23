import React from 'react';
import axios from 'axios';
import { FormGroup, ControlLabel ,FormControl, HelpBlock } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Redirect } from 'react-router'

//Styles CSS
import '../css/Signup.css';

export default class Signup extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      username: null,
      password: null,
      email: null,
      confirmPassword: null,
    }
    this.signForm = React.createRef();
    this.errorMsg = React.createRef();
  }

  cleanForm(){
    this.signForm.current.reset();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.id;

    this.setState({
        [name]: value
      });
  }

  handleSubmit(e){

    e.preventDefault();

    axios.post('/sign-up', {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    })
    .then(response => {
      this.setState({ redirect: true });
    });
  }

  render(){
    if (this.state.redirect) {
      return <Redirect to='/log-in'/>;
    }

    return(
      <Grid>
        <Row>
        <Col xs = { 0 }  md = { 3 }></Col>
        <Col className = "signup" xs = { 12 } md = { 6 }>
          <h2>Join Katharus</h2>
          <h3>The best way to travel</h3>
        </Col>
        <Col xs = { 0 }  md = { 3 }></Col>
        </Row>
        <Row>
          <Col xs = { 0 }  md = { 3 }></Col>
          <Col xs = { 12 } md = { 6 }>
            <div ref = { this.errorMsg }></div>
          </Col>
          <Col xs = { 0 }  md = { 3 }></Col>
        </Row>
        <form id = "signForm" ref = { this.signForm } onSubmit = { this.handleSubmit.bind(this) }>
          <FormGroup role = 'form'>
            <Row>
              <Col xs = { 0 }  md = { 3 }></Col>
              <Col xs = { 12 } md = { 6 }>
                <ControlLabel>Username</ControlLabel>
                <FormControl
                  id = "username"
                  type = "text"
                  placeholder = "Enter Username"
                  onChange = { this.handleInputChange.bind(this) }
                />
              </Col>
              <Col xs = { 0 }  md = { 3 }></Col>
            </Row>
            <Row>
              <Col xs = { 0 }  md = { 3 }></Col>
              <Col xs = { 12 } md = { 6 }>
                <ControlLabel>Email</ControlLabel>
                <FormControl
                  id = "email"
                  type = "text"
                  placeholder = "Enter a valid email"
                  onChange = { this.handleInputChange.bind(this) }
                />
              </Col>
              <Col xs = { 0 }  md = { 3 }></Col>
            </Row>
            <Row>
              <Col xs = { 0 }  md = { 3 }></Col>
              <Col xs = { 12 } md = { 6 }>
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  id = "password"
                  type = "password"
                  onChange = { this.handleInputChange.bind(this) }
                />
                <HelpBlock>Password should be al last 8 chars length and contain one number.</HelpBlock>
              </Col>
              <Col xs = { 0 }  md = { 3 }></Col>
            </Row>
            <Row>
              <Col xs = { 0 }  md = { 3 }></Col>
              <Col xs = { 12 } md = { 6 }>
                <ControlLabel>Confirm Password</ControlLabel>
                <FormControl
                  id = "confirmPassword"
                  type = "password"
                  onChange = { this.handleInputChange.bind(this) }
                />
              </Col>
              <Col xs = { 0 }  md = { 3 }></Col>
            </Row>
            <Row>
              <Col xs = { 0 }  md = { 3 }></Col>
              <Col xs = { 12 } md = { 6 }>
                <ButtonToolbar className = "buttontoolbar">
                  <Button bsStyle = "primary" type = "submit">Submit</Button>
                  <Button bsStyle = "danger" onClick = { this.cleanForm.bind(this) }>Clean</Button>
                </ButtonToolbar>
              </Col>
              <Col xs = { 0 }  md = { 3 }></Col>
            </Row>
          </FormGroup>
        </form>
      </Grid>
    );
  }
};
