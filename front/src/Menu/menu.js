
import React from 'react';
import './menu.css'
import { Container, Row, Col } from 'reactstrap';
import Widget from './Widgets/widget';
import Widget2 from './Widgets2/widget2';
import Widget3 from './Widgets3/widget3'; 
import Widget4 from './Widgets4/widget4'; 
import axios from 'axios'; 

var line = {
  titre: "10", 
  comment: "albums cette semaine",
  }

const line1 = {
  titre: "LELE&EUG", 
  comment: "artiste revelation de l'année 2019 c'est vraiment super",
  
  }

const line2 = {
  titre: "38%", 
  comment: "d'augmentation /heure",
  
  }

const line3 = {
  titre: "34", 
  comment: "je sais pas quoi",
  
  }
  
  const column = {
    titre2: "Charte en colonnes", 
    comment2: "c'est une charte avec des colonnes droites ",
  }
  
  const radar = {
    titre3: "Charte Radar",
    comment3: "c'est une charte qui radarise les donnees "
  }
  
  const rond ={
  
    titre4: "Charte en rond",
    comment4: "c'est une charte avec les données en rond"
  }


 class Menu extends React.Component {

state = {
 artists1: []
}

componentDidMount(){
  axios.get('http://localhost:3001/artists/1234')
  .then(res =>{
    console.log(res); 
    this.setState({artists1: res.data})
  })
}



  render() {
    return (   
    

    <div className="App">
      <Container>
          <br />
        <Row>
              <Col>
                 <Widget data={line}/>
              </Col>
              <Col>
                 <Widget data={line1}/>
              </Col>
              <Col>
                 <Widget data={line2}/>
              </Col>
              <Col>
                 <Widget data={line3}/>
              </Col>
          </Row>

          <Row>
     
              <Col>
                 <Widget2 data2={column}></Widget2>
              </Col>
          </Row>
          <Row>
                 <Col sm="6" xs="auto">
                   <Widget3 data3={radar}/>
              </Col>
              <Col sm="6" xs="auto"> 
                 <Widget4 data4={rond}/>
              </Col>
          </Row>
    
        </Container>
      </div>
      
    );
  }
}

export default Menu; 