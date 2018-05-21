import React from 'react';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';

//Styles CSS
import  "../css/Home.css";

export default class Home extends React.Component{
  render(){
    return(
      <Grid>
        <Row>
          <Col xs = { 12 }>
            <Jumbotron id="jumbo">
              <h1>Katharus</h1>
              <h2><em>"Travel with us, travel with Katharus"</em></h2>
              <p>Your favourite website for student exchange</p>
            </Jumbotron>
          </Col>
        </Row>
      </Grid>
    );
  }
};
