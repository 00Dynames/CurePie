import React, { Component, PropTypes } from 'react';

import Home from './Home.jsx';
import Map from './Map.jsx';
import List from './List.jsx';

export default class Main extends Component{

    constructor(props){
        super(props);
        this.state = {page: "Home"};
    }


    whichPage = (props) => {
        
        if(this.state.page == "Map"){
            return <Map switchToHome={this.switchToHome.bind(this)} switchToList={this.switchToList.bind(this)} />
        } else if (this.state.page == "List"){
            return <List switchToHome={this.switchToHome.bind(this)} switchToMap={this.switchToMap.bind(this)} />
        }

        return <Home switchToMap={this.switchToMap.bind(this)} switchToList={this.switchToList.bind(this)}/>;
    }

    // Component switching functions
    switchToHome = () => {
        this.setState({page: "Home"});
    }

    switchToMap = () => {
        this.setState({page: "Map"});
    }

    switchToList = () => {
        this.setState({page: "List"});
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
