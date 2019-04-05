import React from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './contact.css'

export default class Contact extends React.Component {


  //axios pour artiste
  state = {
    nom: '',
    birth: '',
    followers: 0,
    date: '',
    genre: '',
    cover_picture_url:'',
    durée: 0,
    nb_ecoutes: 0,
    likes: 0
  }

  handleChange = event => {
    this.setState({ nom: event.target.value });
  }
  handleChange1 = event => {
    this.setState({ birth: event.target.value });
  }
  handleChange2 = event => {
    this.setState({ followers: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    
    var artists = {
      nom: this.state.nom,
      birth: this.state.birth,
      followers: this.state.followers
    };

    axios.put('http://localhost:3001/artists', artists )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }


  //axios pour Album


  handleChange3 = event => {
    this.setState({ nom: event.target.value });
  }
  handleChange4 = event => {
    this.setState({ date: event.target.value });
  }
  handleChange5 = event => {
    this.setState({ genre: event.target.value });
  }
  handleChange6 = event => {
    this.setState({ cover_picture_url: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    
    var albums = {
      nom: this.state.nom,
      date: this.state.date,
      genre: this.state.genre,
      cover_picture_url: this.state.cover_picture_url,
  
    };

    axios.put('http://localhost:3001/albums', albums )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  //axios titre


  handleChange7 = event => {
    this.setState({ nom: event.target.value });
  }
  handleChange8 = event => {
    this.setState({ durée: event.target.value });
  }
  handleChange9 = event => {
    this.setState({ nb_ecoutes: event.target.value });
  }
  handleChange10 = event => {
    this.setState({ likes: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    
    var tracks = {
      nom: this.state.nom,
      durée: this.state.durée,
      nb_ecoutes: this.state.nb_ecoutes,
      likes: this.state.likes,
  
    };

    axios.put('http://localhost:3001/tracks', tracks )
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
          <Input type="texte" placeholder="Nom" name="nom" onChange={this.handleChange}/>
        </FormGroup>      <br />
        <FormGroup>
          <Label>Date de naissance</Label>
          <Input type="texte" placeholder="Date de naissance" name="birth" onChange={this.handleChange1}/>
        </FormGroup>      <br />
        <FormGroup>
          <Label for="exampleSelect">Followers</Label>
          <Input type="texte" placeholder="Followers" name="followers" onChange={this.handleChange2}/><br />    <br />   
        <center><Button>AJOUTER </Button></center>  


        </FormGroup> </Form>
        </Col>     <br />      <br />


        <Col><Form onSubmit={this.handleSubmit}>  <br />    <br /> <br /> 
        <h2 >Album</h2>
        <br />   
      <FormGroup>
          <Label>Nom</Label>
          <Input type="texte"  placeholder="Nom" name ="nom" onChange={this.handleChange3} />
        </FormGroup>      <br />
        <FormGroup>
          <Label>Année de sortie</Label>
          <Input type="texte"  placeholder="Année de sortie" name = "date" onChange={this.handleChange4}/>
        </FormGroup>      <br />
        <FormGroup>
          <Label>Genre</Label>
          <Input type="texte"  placeholder="Genre" name = "genre" onChange={this.handleChange5} />
        </FormGroup>      <br />
        <FormGroup>
          <Label >Image de couverture </Label>
          <Input type="file" name="cover_picture_url" onChange={this.handleChange6}/>
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>   <br />    <br /> 
        <center>  <Button>AJOUTER </Button></center>
        </FormGroup>
        </Form> </Col>     <br />      <br />

        <Col><br />    <br /> <br /> 
        <h2 >Titre</h2>  <br />   <Form onSubmit={this.handleSubmit}>  
      <FormGroup>
          <Label>Nom</Label>
          <Input type="texte"  placeholder="Nom" name="nom" onChange={this.handleChange7} />
        </FormGroup>      <br />
        <FormGroup>
          <Label>Durée</Label>
          <Input type="texte"  placeholder="Durée" name = "durée" onChange={this.handleChange8}/>
        </FormGroup>      <br />
        <FormGroup>
          <Label >Nombre d'écoutes</Label>
          <Input type="texte"  placeholder="Nombre d'écoutes"name = "nb_ecoutes" onChange={this.handleChange9} />
        </FormGroup> 
        <FormGroup> <br />
          <Label >Likes </Label>
          <Input type="texte"  placeholder="Likes" name = "likes" onChange={this.handleChange10} /><br />    <br />    
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