import React, { Component } from 'react';
import './titre2.css';

class Titre2 extends Component {
  render() {
    const titre2 = this.props.titre2;
  
    return (
      <div className="title2">
        <p>{titre2}</p>
      </div>
    );
  }
}

export default Titre2;
