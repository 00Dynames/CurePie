import React, { Component, PropTypes } from 'react';

import Exp from './landingpg.jsx';
import MapContainer from './Map.jsx';
import AppBarExampleIconButton from './Navbar.jsx'
import EventDetails from './event_details.jsx'
import NavBar from './Navbar.jsx'
import Listview from './Listview.jsx'
import Signintabs from './Signintabs.jsx'

export default class Index extends Component{

    constructor(props){
        super(props);
        this.state = {page: "Home"};
    }


    whichPage = (props) => {

        if(this.state.page == "Map"){
            return <MapContainer  switchToEvent={this.switchToEvent.bind(this)} switchToList={this.switchToList.bind(this)} switchToLogin={this.switchToLogin.bind(this)} />
        } else if (this.state.page == "List"){
            return <Listview switchToHome={this.switchToHome.bind(this)} switchToMap={this.switchToMap.bind(this)} switchToLogin={this.switchToLogin.bind(this)} />
        } else if (this.state.page == "Event"){
            return <EventDetails  event={this.state.event}/> 
        } else if (this.state.page == "Login"){
            return <Signintabs/>
        }

        return <Exp switchToMap={this.switchToMap.bind(this)} switchToList={this.switchToList.bind(this)} />;
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
    switchToLogin = () => {
        this.setState({page: "Login"})
    }

    switchToLogin = () => {
        this.setState({page: "Login"});
    }

    switchToEvent = (e) => {
        this.setState({page: "Event", event: e});
    }

    // Render component
    render (){
        console.log(this.state);
        return(
            <div>
                <AppBarExampleIconButton 
                    switchToHome={this.switchToHome.bind(this)} 
                    switchToList={this.switchToList.bind(this)} 
                    switchToMap={this.switchToMap.bind(this)} 
                    switchToLogin={this.switchToLogin.bind(this)}
                />
                {this.whichPage()}
            </div>
        );
    }

}
