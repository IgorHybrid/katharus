import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import Popup from "reactjs-popup";
import Cookies from 'universal-cookie';
import axios from 'axios';

export default class About extends React.Component{
  constructor(props) {
    super(props);
    const cookies = new Cookies();
    this.state = {
      user: cookies.get('user') || null,
      refresh: false,
      data: [],
      description: null,
      country: null,
      price: null
    }
    this.tripForm = React.createRef();
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
  deleteTrip(){
    console.log('Delete');
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
              <Popup
                trigger={<Button bsStyle = "primary" className = "pull-right">Add a new trip</Button>}
                modal
                closeOnDocumentClick
                >
                <h1>Fill the fields</h1>
                <form id = "tripForm" ref = { this.tripForm } onSubmit = { this.handleSubmit.bind(this) }>
                  <FormGroup role = "form">
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
                    <ButtonToolbar id = "buttontoolbar">
                      <Button bsStyle = "primary" type = "submit">Submit</Button>
                      <Button bsStyle = "danger" onClick = { this.cleanForm.bind(this) }>Clean</Button>
                    </ButtonToolbar>
                  </FormGroup>
                </form>
              </Popup>
            </Col>
          </Row>
        }
        {data.map(trip =>
          <div className = "trip" key = { trip._id }>
            <h2>Country: { trip.country }</h2>
            <h3>Created by { trip._user.username } on { this.createValidDate(trip.created) }</h3>
            <p>Price: { trip.price }</p>
            <p>Description: { trip.description }</p>
            { (user && trip._user._id == user.id) &&
              <Button bsStyle = "danger" onClick = { this.deleteTrip.bind(this) }>Delete</Button>
            }
          </div>
        )}
      </Grid>
    );
  }
};
