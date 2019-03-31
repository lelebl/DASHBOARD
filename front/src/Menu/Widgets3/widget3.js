import React, { Component } from 'react';

import "./widget3.css"
import OHLCChart from './financial charts/OHLC Chart';
import Titre3 from './Titre3/titre3';
import Comment3 from './Comment3/comment3';


class Widget3 extends Component{

    render(){

        const { titre3, comment3 } = this.props.data3 ; 
        return(
            <div className="cont3">
            <Titre3 titre3={titre3}/>
            <Comment3 comment3={comment3}/>
            <OHLCChart />
          </div>
        );
    }

}

export default Widget3; 