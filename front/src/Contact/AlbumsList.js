import React from 'react';
import axios from 'axios';

export default class AlbumsList extends React.Component {

    state ={
        albumes : [],
    };

    componentDidMount (){
        axios.get('http://localhost:3001/albums').then(res => {console.log(res);
    this.setState({albumes : res.data});
    });
    }

    render() {
        return <ul>{this.state.albumes.map(albums => <li>{albums.nom}</li>)}
            </ul>;
        
    }
}

