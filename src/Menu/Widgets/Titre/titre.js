import React, { Component } from 'react';
import './titre.css';

class Titre extends Component {
  render() {
    const titre = this.props.titre;
  
    return (
      <div className="title">
        <p>{titre}</p>
      </div>
    );
  }
}

export default Titre;
