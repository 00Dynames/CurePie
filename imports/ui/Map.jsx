import React, { Component, PropTypes } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { createContainer } from 'meteor/react-meteor-data';
import { HTTP } from 'meteor/http';
import Heading from './Listview.jsx';

import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Events } from '../api/events.js';

export class MapContainer extends Component {

    getEvents = () => {
        events = Events.find().fetch();
        markers = [];
        for (i = 0; i < events.length; i++){
            console.log(events[i].location);
            markers.push(<Marker key={i}
              position={{ lat: events[i].location[0], lng: events[i].location[1] }}
              title={events[i].name+':\n'+events[i].type+'\n\nClick for more details'}
              onClick={this.props.switchToEvent.bind(this, events[i])} />)
        }
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

        return (
						<div id='map-pg-container'>
							<Heading />
	            <div style={style}>
	                <Map google={this.props.google} defaultCenter={{ lat: -34.397, lng: 150.644 }} zoom={3} >
	                    {this.getEvents().map((event) => (event))}
	                </Map>

	            </div>
						</div>
        );
    }
}

export default GoogleApiWrapper({
      apiKey: "AIzaSyDxI0mCeLq2o0YTatFKIRY2IE9n9ttuQOo"
})(MapContainer)
