import React, { Component } from 'react';
import './comment2.css';

class Comment2 extends Component {
  render() {
    const comment2 = this.props.comment2;
  
    return (
      <div className="commentaire2">
        <p>{comment2}</p>
      </div>
    );
  }
}

export default Comment2;
