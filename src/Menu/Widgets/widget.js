import React, { Component } from 'react';

import "./widget.css"
import Titre from './Titre/titre';
import Comment from './Comment/comment';


class Widget extends Component{

    render(){

        const { titre, comment } = this.props.data ; 
        return(
            <div className="cont">
            <Titre titre={titre}/>
            <Comment comment={comment}/>
          </div>
        );
    }
}


export default Widget; 