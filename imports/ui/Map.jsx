import React, { Component, PropTypes } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { createContainer } from 'meteor/react-meteor-data';
import { HTTP } from 'meteor/http';
import { Meteor } from 'meteor/meteor';

import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Events } from '../api/events.js';

export class MapContainer extends Component {

    getEvents = () => {
        subscription = Meteor.subscribe('events');
        events = Events.find().fetch();
        console.log(events);
        markers = [];
        for (i = 0; i < events.length; i++){
            console.log(events[i].location);
            markers.push(<Marker key={i} position={{ lat: events[i].location[0], lng: events[i].location[1] }} onClick={this.props.switchToEvent.bind(this, events[i])} />)
        }
        console.log(markers);
        return markers;
    }

    render(){

        const style = {
            width: '100vw',
            height: '100vh'
        }

        if (!this.props.loaded) {
            return <div>Loading...</div>
        }
        console.log("MAP");
        return (
            <div style={style}>
                <Map google={this.props.google} defaultCenter={{ lat: -34.397, lng: 150.644 }} zoom={3} >
                    {this.getEvents().map((event) => (event))}
                </Map>

            </div>
        );
    }
}

export default GoogleApiWrapper({
      apiKey: "AIzaSyDxI0mCeLq2o0YTatFKIRY2IE9n9ttuQOo"
})(MapContainer)
