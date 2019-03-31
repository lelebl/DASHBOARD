import React, { Component } from 'react';
import './comment4.css';

class Comment4 extends Component {
  render() {
    const comment4 = this.props.comment4;
  
    return (
      <div className="commentaire4">
        <p>{comment4}</p>
      </div>
    );
  }
}

export default Comment4;
