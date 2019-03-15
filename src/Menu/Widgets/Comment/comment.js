import React, { Component } from 'react';
import './comment.css';

class Comment extends Component {
  render() {
    const comment = this.props.comment;
  
    return (
      <div className="commentaire">
        <p>{comment}</p>
      </div>
    );
  }
}

export default Comment;
