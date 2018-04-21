import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class Footer extends React.Component{
  render(){
    return (
      <Grid className = "footer">
        <Row className = "container">
          <Col xs = { 12 }>
            <p className = "text-muted text-center footer-text">Página creada por Igor Iglesias Alonso @2018</p>
          </Col>
        </Row>
      </Grid>
    );
  }
};
