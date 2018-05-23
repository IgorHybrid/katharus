import React from 'react';
import axios from 'axios';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Redirect } from 'react-router'

//Styles CSS
import "../css/Login.css";

export default class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null
    }
    this.logForm = React.createRef();
    this.errorMsg = React.createRef();
  }

  cleanForm(){
    this.logForm.current.reset();
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

    axios.post('/log-in', {
      username: this.state.username || "null",
      password: this.state.password || "null"
    })
    .then(response => {
      //console.log(response);
      window.location.href = '/';
    })
    .catch(function (error) {
      //console.log(error);
    });
  }

  render(){
    return(
      <Grid>
        <Row>
          <Col className = "text-center login">
            <h3>Log in to Katharus</h3>
          </Col>
        </Row>
        <form id = "logForm" ref = { this.logForm } onSubmit = { this.handleSubmit.bind(this) }>
          <FormGroup role = "form">
            <Row>
              <Col xs = { 0 }  md = { 3 }></Col>
              <Col xs = { 12 } md = { 6 }>
                <ControlLabel>Username</ControlLabel>
                <FormControl
                  id = "username"
                  type = "text"
                  placeholder = "Enter your username"
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
                  placeholder = "Enter your password"
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
