import React, { Component } from 'react';
import './comment3.css';

class Comment3 extends Component {
  render() {
    const comment3 = this.props.comment3;
  
    return (
      <div className="commentaire3">
        <p>{comment3}</p>
      </div>
    );
  }
}

export default Comment3;
