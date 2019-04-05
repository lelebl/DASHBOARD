
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Menu from './Menu/menu';
import Contact from './Contact/contact';

export default()=>(
    <Switch>
        <Route path="/" exact component ={Menu}/>
        <Route path="/contact" exact component ={Contact}/>
    </Switch>
);