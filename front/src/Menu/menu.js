
import React from 'react';
import axios from 'axios';
import './menu.css'
import { Container, Row, Col } from 'reactstrap';
import Widget from './Widgets/widget';
import Widget2 from './Widgets2/widget2';
import Widget3 from './Widgets3/widget3'; 
import Widget4 from './Widgets4/widget4'; 


  
  const column = {
    titre2: "Nombre de followers", 
    comment2: "par artistes",
  }
  
  const radar = {
    titre3: "Nombre d'albums",
    comment3: "en fonction du genre "
  }
  
  const rond ={
  
    titre4: "Popularité des titres",
    comment4: "nombre de likes par titre"
  }


  class Menu extends React.Component {


  

    state = {
      line: {
            titre: " ", 
            comment: ""
          },
      line1: {
            titre: " ", 
            comment: ""
          },
  
      line2 : {
            titre: "", 
            comment: ""
            
            },
      line3 : {
              titre: "", 
              comment: ""
              
              }
  
  
        }
  
  
  
  constructor(props){
  super(props);
  var self = this;
  
  
  
  axios.get('http://localhost:3001/tracks/somme')
  .then(res => {
    console.log(res.data.somme);
     self.setState({line: {titre:res.data.somme + " min ",comment:"Temps total des morceaux"}});
  });
  
  axios.get('http://localhost:3001/artists/followers')
  .then(res =>{
    console.log(res.data.artist);
    self.setState({line2: {titre:res.data.artist.nom,comment:" a le plus de followers:"+res.data.artist.followers}});
  
  });
  
  axios.get('http://localhost:3001/albums/diff')
  .then(res =>{
    console.log(res.data.artist);
    self.setState({line1: {titre:res.data.diff,comment:"Albums de "+res.data.genre}});
  
  });
  
  axios.get('http://localhost:3001/albums/nbr')
  .then(res =>{
    console.log(res.data.nbr);
    self.setState({line3: {titre:res.data.nbr,comment:"Albums enregistrés"}});
  
  });
  
  }
  
  
  
    render() {
      return (        
      <div className="App">
        <Container>
            <br />
          <Row>
                <Col>
                   <Widget data={this.state.line}/>
                </Col>
                <Col>
                   <Widget data={this.state.line1}/>
                </Col>
                <Col>
                   <Widget data={this.state.line2}/>
                </Col>
                <Col>
                   <Widget data={this.state.line3}/>
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