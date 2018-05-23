import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

//Styles CSS
import "../css/Footer.css";

export default class Footer extends React.Component{
  render(){
    return (
      <Grid className = "footer">
        <Row className = "container-fluid">
          <Col>
            <p className = "text-muted text-center footer-text">Página creada por Igor Iglesias Alonso @2018</p>
            <p className = "text-center footer-text"><a target="_blank" href="https://www.vecteezy.com">Free Vector Graphics by vecteezy.com</a></p>
          </Col>
        </Row>
      </Grid>
    );
  }
};
