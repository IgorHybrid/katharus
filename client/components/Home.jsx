import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Thumbnail, Image, Jumbotron } from 'react-bootstrap';

//Styles CSS
import  "../css/Home.css";

export default class Home extends React.Component{
  render(){
    return(
      <Grid>
        <Row>
          <Col xs = { 12 }>
            <Jumbotron id="jumbo">
              <Row>
                <Col sm = { 8 }>
                  <h1>Katharus</h1>
                  <h2><em>"Travel with us, travel with Katharus"</em></h2>
                  <p>Your favourite website for student exchange</p>
                </Col>
                <Col xsHidden sm = { 4 } >
                  <Image id="logo" src = "/img/logo_transparente.png" alt = "Logo Katharus"/>
                </Col>
              </Row>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col xs = { 12 } md = { 4 }>
            <Thumbnail className = "imagenesEstudiantes" src = "/img/chica_estudiante_fondo.jpg" alt = "Chica estudiante" >
              <h3 className = "text-center" >Rosa Gutierrez</h3>
              <p className = "text-justify" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque leo eros, bibendum sit amet orci eu, tempus dapibus elit. Nam tincidunt condimentum leo. Etiam sed odio lobortis, imperdiet libero non, scelerisque sem. Phasellus pulvinar dolor vel pretium gravida. Nulla vitae.
              </p>
            </Thumbnail>
          </Col>
          <Col xs = { 12 } md = { 4 }>
            <Thumbnail className = "imagenesEstudiantes" src = "/img/estudiante_postgrado.png"   alt = "Chico estudiante" >
              <h3 className = "text-center" >Max Zimmermann</h3>
              <p className = "text-justify" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque leo eros, bibendum sit amet orci eu, tempus dapibus elit. Nam tincidunt condimentum leo. Etiam sed odio lobortis, imperdiet libero non, scelerisque sem. Phasellus pulvinar dolor vel pretium gravida. Nulla vitae.
              </p>
            </Thumbnail>
          </Col>
          <Col xs = { 12 } md = { 4 }>
            <Thumbnail className = "imagenesEstudiantes" src = "/img/chica_estudiante.png"       alt = "Chica estudiante" >
              <h3 className = "text-center" >Kalina Dvořák</h3>
              <p className = "text-justify" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque leo eros, bibendum sit amet orci eu, tempus dapibus elit. Nam tincidunt condimentum leo. Etiam sed odio lobortis, imperdiet libero non, scelerisque sem. Phasellus pulvinar dolor vel pretium gravida. Nulla vitae.
              </p>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    );
  }
};
