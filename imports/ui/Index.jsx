import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

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
        this.state = {
            page: "Home",
            loggedIn: false,
            user: ""
        };
    }


    whichPage = (props) => {

        if(this.state.page == "Map"){
            return <MapContainer  switchToEvent={this.switchToEvent.bind(this)} switchToList={this.switchToList.bind(this)} switchToLogin={this.switchToLogin.bind(this)} />
        } else if (this.state.page == "List"){
            return <Listview switchToHome={this.switchToHome.bind(this)} switchToMap={this.switchToMap.bind(this)} switchToLogin={this.switchToLogin.bind(this)} />
        } else if (this.state.page == "Event"){
            return <EventDetails  loggedIn={this.state.loggedIn} event={this.state.event}/>
        } else if (this.state.page == "Login"){
            return Signintabs(this.login.bind(this))
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
    login = () => {
        this.setState({page: "Home", loggedIn: true, user: "Alice"})
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
                    user={this.state.loggedIn ? this.state.user : ''}
                />
                {this.whichPage()}
            </div>
        );
    }

}
