import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import axios from 'axios';

//Styles CSS
import "../css/Trip.css";

export default class About extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      user: null,
      refresh: false,
      data: [],
      description: null,
      country: null,
      price: null
    }
    this.tripForm = React.createRef();

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.id;

    this.setState({
        [name]: value
      });
  }
  cleanForm(){
    this.tripForm.current.reset();
  }
  createValidDate(dat){
    var date = new Date(dat);

    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var dt = date.getDate();

    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }

    return year + "/" + month + "/" + dt;
  }
  deleteTrip(id){
    axios.delete('/trip/' + id)
    .then(response => {
      //console.log(response.data.msg);
      this.setState({refresh: true});
    })
    .catch(error => {
      //console.log(error);
    });
  }
  handleSubmit(e){
    e.preventDefault();
    axios.post('/trips', {
      _user: this.state.user.id || "null",
      description: this.state.description || "null",
      country: this.state.country || "null",
      price: this.state.price || "null"
    })
    .then(response => {
      //console.log(response);
      this.setState({refresh: true});
      //console.log(this.state.refresh);
    })
    .catch(function (error) {
      //console.log(error);
    });
  }
  componentDidMount(){
    const cookies = new Cookies();
    if(cookies.get('user')){
      this.setState({user: cookies.get('user')});
    }
    axios.get('/trips-json')
      .then(response => {
        this.setState({data:response.data})
        //console.log(response);
      })
      .catch(function (error) {
        //console.log(error);
      });
  }
  componentDidUpdate(){
    axios.get('/trips-json')
      .then(response => {
        this.setState({data:response.data})
        //console.log(response);
      })
      .catch(function (error) {
        //console.log(error);
      });
  }
  render(){
    var { user }  = this.state;
    var { data }  = this.state;
    return(
      <Grid>
        <Row>
          <Col>
            <h2>Take a look to our availables trips!</h2>
          </Col>
        </Row>
        { user &&
          <Row>
            <Col md = { 8 }>
            </Col>
            <Col md = { 4 }>
              <Button bsStyle = "primary" className = "pull-right" onClick = { this.handleShow }>Add a new trip</Button>
                <Modal show={ this.state.show } onHide={ this.handleClose }>
                  <Modal.Header closeButton>
                    <Modal.Title>Form to create a new trip</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <form id = "tripForm" ref = { this.tripForm } onSubmit = { this.handleSubmit.bind(this) }>
                      <FormGroup role = "form">
                        <h1>Fill the fields</h1>
                        <ControlLabel>Country</ControlLabel>
                        <FormControl
                          id = "country"
                          type = "text"
                          placeholder = "Enter country name"
                          onChange = { this.handleInputChange.bind(this) }
                        />
                        <ControlLabel>Price</ControlLabel>
                        <FormControl
                          id = "price"
                          type = "text"
                          placeholder = "Enter your price"
                          onChange = { this.handleInputChange.bind(this) }
                        />
                        <ControlLabel>Description</ControlLabel>
                        <FormControl
                          id = "description"
                          componentClass = "textarea"
                          placeholder = "Add your description"
                          onChange = { this.handleInputChange.bind(this) }
                        />
                        <ButtonToolbar className = "buttontoolbar">
                          <Button bsStyle = "primary" type = "submit" onClick = { this.handleClose }>Submit</Button>
                          <Button bsStyle = "danger" onClick = { this.cleanForm.bind(this) }>Clean</Button>
                        </ButtonToolbar>
                      </FormGroup>
                    </form>
                  </Modal.Body>
                </Modal>
            </Col>
          </Row>
        }
        { this.state.data.length == 0 &&
          <Alert bsStyle="danger">
            <h3>Oh snap! There is an error!</h3>
            <h4>
              There are no trips available yet :(
            </h4>
          </Alert>
        }
        {data.map(trip =>
          <div className = "trip" key = { trip._id }>
            <h2>Country: { trip.country }</h2>
            <h3>Created by { trip._user.username } on { this.createValidDate(trip.created) }</h3>
            <p>Price: { trip.price }</p>
            <p>Description: { trip.description }</p>
            { (user && trip._user._id == user.id) &&
              <Button bsStyle = "danger" onClick = { this.deleteTrip.bind(this, trip._id) }>Delete</Button>
            }
          </div>
        )}
      </Grid>
    );
  }
};
