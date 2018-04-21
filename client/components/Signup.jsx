import React from 'react';
import { FormGroup, ControlLabel ,FormControl, HelpBlock } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';

import '../css/Signup.css';

export default class Signup extends React.Component{
  constructor(props) {
    super(props);
    this.signForm = React.createRef();
  }
  cleanForm(){
    this.signForm.current.reset();
  }
  render(){
    return(
      <Grid>
        <form id = "signForm" ref = {this.signForm}>
          <FormGroup>
            <Row>
              <Col xs = { 0 }  md = { 3 }></Col>
              <Col xs = { 12 } md = { 6 }>
                <ControlLabel>Username</ControlLabel>
                <FormControl
                  id = "username"
                  type = "text"
                  placeholder = "Enter Username"
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
                  type = "email"
                  placeholder = "Enter a valid email"
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
                />
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
                />
              </Col>
              <Col xs = { 0 }  md = { 3 }></Col>
            </Row>
            <Row>
              <Col xs = { 0 }  md = { 3 }></Col>
              <Col xs = { 12 } md = { 6 }>
                <ButtonToolbar id = "buttontoolbar">
                  <Button bsStyle = "primary">Submit</Button>
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
