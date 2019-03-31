import React, { Component } from 'react';
import './App.css';
import { Link} from 'react-router-dom';
import {Nav} from 'reactstrap';
import Routes from './route';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
return (

           <div className="tout">
             <Container>
               <Row>  
                <Col sm="2" xs="0">
                  <div className="barre"> 
                        <p>DASHBOARD</p>
                        <hr /> 
                      <Nav vertical>
                        <ol>
                          <li><Link to="/">Menu</Link></li>
                        </ol>
                        <hr />  
                        <ol>
                          <li><Link to="/contact">Ajouter</Link></li>
                        </ol>
                        <hr />
              </Nav>
                  </div>
                  </Col>
       
                  <Col sm="10" xs="12">
                    <Routes/>
                  </Col>
                </Row>
              </Container> 

            </div>
  
       
    );
  }
}

export default App;
