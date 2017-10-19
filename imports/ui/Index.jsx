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
import FavEvents from './favevents.jsx'
import RecentViewed from './recentlyViewed.jsx'
import Settings from './settings.jsx'

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
            return <Listview switchToEvent={this.switchToEvent.bind(this)} switchToLogin={this.switchToLogin.bind(this)} />
        } else if (this.state.page == "Event"){
            return <EventDetails loggedIn={this.state.loggedIn} event={this.state.event}/>
        } else if (this.state.page == "Login"){
            return Signintabs(this.login.bind(this))
        } else if (this.state.page == "FavEvents"){
          return <FavEvents switchToEvent={this.switchToEvent.bind(this)}/>
        } else if (this.state.page == "RecentViewed"){
          return <RecentViewed switchToEvent={this.switchToEvent.bind(this)}/>
        } else if (this.state.page == "Settings"){
          return <Settings switchToHome={this.switchToHome.bind(this)}/>
        }

        return <Exp switchToMap={this.switchToMap.bind(this)} switchToList={this.switchToList.bind(this)} user={this.state.user} loggedIn={this.state.loggedIn}/>;
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
    switchToFavEvents = () => {
        this.setState({page: "FavEvents"})
    }
    switchToRecentViewed = () => {
        this.setState({page: "RecentViewed"})
    }
    switchToSettings = () => {
        this.setState({page: "Settings"})
    }
    login = () => {
        this.setState({page: "Home", loggedIn: true, user: "Alice"})
    }
    logout = () => {
        this.setState({page: "Home", loggedIn: false, user: ' '})
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
                    switchToFavEvents={this.switchToFavEvents.bind(this)}
                    switchToRecentViewed={this.switchToRecentViewed.bind(this)}
                    switchToSettings={this.switchToSettings.bind(this)}
                    user={this.state.loggedIn ? this.state.user : ''}
                    logout={this.logout.bind(this)}
                />
                {this.whichPage()}
            </div>
        );
    }

}
