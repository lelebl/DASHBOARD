import React from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './contact.css'

export default class Contact extends React.Component {


  //axios pour artiste
  state = {
    nom_artiste: '',
    prenom_artiste: '',
    select_artiste: ''
  }

  handleChange = event => {
    this.setState({ nom_artiste: event.target.value });
  }
  handleChange = event => {
    this.setState({ prenom_artiste: event.target.value });
  }
  handleChange = event => {
    this.setState({ select_artiste: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    

    const artists = {
      nom_artiste: this.state.nom_artiste,
      prenom_artiste: this.state.prenom_artiste,
      select_artiste: this.state.select_artiste
    };

    axios.put('http://localhost:3001/artists', { artists })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }






  render() {
    return (
        
            <div className="form">  <br />   <br /> 
           <Container><Row> 
           <center> <h1>Ajouter un artiste, un album ou un titre </h1> </center>
    
    
        
        <Col>
        <Form onSubmit={this.handleSubmit}>
        <br />    <br /> <br /> 
        <h2 >Artiste</h2>
        <br /> 
      <FormGroup>
          <Label>Nom</Label>
          <Input type="texte" placeholder="Nom" name="nom_artiste" onChange={this.handleChange}/>
        </FormGroup>      <br />
        <FormGroup>
          <Label>Date de naissance</Label>
          <Input type="texte" placeholder="Date de naissance" name="prenom_artiste" onChange={this.handleChange}/>
        </FormGroup>      <br />
        <FormGroup>
          <Label for="exampleSelect">Followers</Label>
          <Input type="texte" placeholder="Followers" name="followers_artiste" onChange={this.handleChange}/><br />    <br />   
        <center><Button>AJOUTER </Button></center>  


        </FormGroup> </Form>
        </Col>     <br />      <br />





        <Col><Form>  <br />    <br /> <br /> 
        <h2 >Album</h2>
        <br />   
      <FormGroup>
          <Label>Nom</Label>
          <Input type="name"  placeholder="Nom" />
        </FormGroup>      <br />
        <FormGroup>
          <Label>Année de sortie</Label>
          <Input type="name"  placeholder="Année de sortie" />
        </FormGroup>      <br />
        <FormGroup>
          <Label>Genre</Label>
          <Input type="name"  placeholder="Genre" />
        </FormGroup>      <br />
        <FormGroup>
          <Label >Image de couverture </Label>
          <Input type="file" name="file" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>   <br />    <br /> 
        <center>  <Button>AJOUTER </Button></center>
        </FormGroup>
        </Form> </Col>     <br />      <br />

        <Col><br />    <br /> <br /> 
        <h2 >Titre</h2>  <br />   <Form>  
      <FormGroup>
          <Label>Nom</Label>
          <Input type="name"  placeholder="Nom" />
        </FormGroup>      <br />
        <FormGroup>
          <Label>Durée</Label>
          <Input type="name"  placeholder="Durée" />
        </FormGroup>      <br />
        <FormGroup>
          <Label >Nombre d'écoutes</Label>
          <Input type="name"  placeholder="Nombre d'écoutes" />
        </FormGroup> 
        <FormGroup> <br />
          <Label >Likes </Label>
          <Input type="name"  placeholder="Likes" /><br />    <br />    
         <center><Button>AJOUTER </Button></center> 
        </FormGroup> 
        </Form>    </Col>     <br />      <br />
        
        

        </Row></Container>
        <br />    <br />    <br />    <br />    <br />
      
      <br />    <br />    <br />    <br />    <br />
      <br />
      
      </div>
 


    );
  

  }
}