import React, { Component } from 'react';
import './titre4.css';

class Titre4 extends Component {
  render() {
    const titre4 = this.props.titre4;
  
    return (
      <div className="title3">
        <p>{titre4}</p>
      </div>
    );
  }
}

export default Titre4;
