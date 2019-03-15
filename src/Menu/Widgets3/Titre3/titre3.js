import React, { Component } from 'react';
import './titre3.css';

class Titre3 extends Component {
  render() {
    const titre3 = this.props.titre3;
  
    return (
      <div className="title3">
        <p>{titre3}</p>
      </div>
    );
  }
}

export default Titre3;
