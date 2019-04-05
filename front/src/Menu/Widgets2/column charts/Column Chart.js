import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer
} from 'recharts';
import axios from 'axios';

export default class Example extends PureComponent {
  
state ={
  data1:[
  {
    name: 'Artiste A', followers: 590, 
  },
  {
    name: 'Artiste  B', followers: 868, 
  },
  {
    name: 'Artiste  C', followers: 1397, 
  },
  {
    name: 'Artiste  D', followers: 1480, 
  },
  {
    name: 'Artiste  E', followers: 1520, 
  },
  {
    name: 'Artiste  F', followers: 1400, 
  },]
};

constructor(props){
  super(props);
  var data1 =[]; 
  var self= this; 

  axios.get('http://localhost:3001/artists').then(res=>{
    console.log(res);
    res.data.forEach(element => {
      data1.push({
        name: element.nom,
        followers: element.followers
      }
      );
    });

  }).then(function(){
    self.setState({data1:data1});
  });

}


  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
      <ComposedChart
        data={this.state.data1}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" stroke="#ffffff" />
        <YAxis stroke="#ffffff" />
        <Tooltip />
        <Legend />
        <Bar dataKey="followers" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="followers" stroke="#ff7300" />
      </ComposedChart>
      </ResponsiveContainer></div>
    );
  }
}
