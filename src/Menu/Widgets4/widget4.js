import React, { Component } from 'react';

import "./widget4.css"
import RondChart from './overview/Column Chart with Indexlabel';
import Titre4 from './Titre4/titre4';
import Comment4 from './Comment4/comment4';


class Widget4 extends Component{

    render(){

        const { titre4, comment4 } = this.props.data4 ; 
        return(
            <div className="cont4">
            <Titre4 titre4={titre4}/>
            <Comment4 comment4={comment4}/>
            <RondChart/>
          </div>
        );
    }

}

export default Widget4; 