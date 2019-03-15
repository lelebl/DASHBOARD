import React, { Component } from 'react';

import "./widget2.css"
import ColumnChart from './column charts/Column Chart';
import Titre2 from './Titre2/titre2';
import Comment2 from './Comment2/comment2';


class Widget2 extends Component{

    render(){

        const { titre2, comment2 } = this.props.data2 ; 
        return(
            <div className="cont2">
            <Titre2 titre2={titre2}/>
            <Comment2 comment2={comment2}/>
            <ColumnChart />
          </div>
        );
    }



}


export default Widget2; 