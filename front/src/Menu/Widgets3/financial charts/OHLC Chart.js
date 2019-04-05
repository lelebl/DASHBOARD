import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, 
  PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer
} from 'recharts';
import Axios from 'axios';


export default class Example extends PureComponent {

  state ={
    data1:[
    {
      genre: 'Rap', A: 10, fullMark: 15, 
    },
    {
      genre: 'Rock', A: 8,
    },
    {
      genre: 'Hip Hop', A: 5, 
    },
    {
      genre: 'Variete', A: 13,
    },
    {
      genre: 'Classique', A: 4, 
    },
    {
      genre: 'Rumba', A: 14,  
    },]
  };

  constructor(props){
    super(props);
    var rap = "Rap"
    var rock = "Rock"
    var hip = "Hip-Hop"
    
    var data1 = [];
    var self=this; 
    var sommeRap = 0; 
    var sommeRock = 0; 
    var sommeHipHop = 0; 
    Axios.get('http://localhost:3001/albums').then(res =>{
      console.log(res);
      res.data.forEach(element => {

        if(element.genre === rap){
          sommeRap++;
        }

        if(element.genre === rock){
          sommeRock++;
        }

        if(element.genre === hip){
          sommeHipHop++;
        }
        });
          data1.push(
          {
            genre: "Rap", 
            A: sommeRap
          });
          data1.push(
            {
              genre: "Rock", 
              A: sommeRock
            });
            data1.push(
              {
                genre: "Hip-Hop", 
                A: sommeHipHop
              });
      
    })
    .then(function(){
      self.setState({data1:data1});
    });
  }
  

  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
      <RadarChart data={this.state.data1}>
        <PolarGrid />
        <PolarAngleAxis dataKey="genre" stroke="#ffffff" />
        <PolarRadiusAxis angle={30} domain={[0, 5]} />
        <Radar name="Albums par genre" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
 
      </RadarChart>
      </ResponsiveContainer></div>
    );
  }
}