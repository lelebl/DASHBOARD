import React from 'react';
import axios from 'axios';

export default class TracksList extends React.Component {

    state ={
        trackes : [],
    };

    componentDidMount (){
        axios.get('http://localhost:3001/tracks').then(res => {console.log(res);
    this.setState({trackes : res.data});
    });
    }

    render() {
        return <ul>{this.state.trackes.map(tracks => <li>{tracks.nom}</li>)}
            </ul>;
        
    }
}

