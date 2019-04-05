import React from 'react';
import axios from 'axios';

export default class ArtistsList extends React.Component {

    state ={
        artistes : [],
    };

    componentDidMount (){
        axios.get('http://localhost:3001/artists').then(res => {console.log(res);
    this.setState({artistes : res.data});
    });
    }

    render() {
        return <ul>{this.state.artistes.map(artists => <li>{artists.nom}</li>)}
            </ul>;
        
    }
}

