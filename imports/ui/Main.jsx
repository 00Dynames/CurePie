import React, { Component, PropTypes } from 'react';

import Home from './Home.jsx';

export default class Main extends Component{

    constructor(props){
        super(props);
        this.state = {page: "Home"};
    }


    whichPage = (props) => {
        
        if(this.state.page == "Map"){
            return "Map";
        } 

        return <Home switchToMap={this.switchToMap.bind(this)} />;
    }

    switchToHome = () => {
        this.setState({page: "Home"});
    }

    switchToMap = () => {
        this.setState({page: "Map"});
    }

    render (){
        console.log(this.state);
        return(
            <div>
                {this.whichPage()}
            </div>
        )
    }

}
