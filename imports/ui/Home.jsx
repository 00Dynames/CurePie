import React, { Component, PropTypes } from 'react';
import { redierct } from 'meteor/kadira:flow-router';

export default class Home extends Component{

    constructor(props){
        super(props);
        
    }

    loadPage = () => {
        //redirect("/");    
        console.log("MAP");
    }

    render(){
        console.log(this.state);
        return(
            <div>
                <button type="button" onClick={this.props.switchToMap}>Map</button>
                <button type="button" onClick={this.props.switchToList}>List</button>
            </div>
        )
    }
}


