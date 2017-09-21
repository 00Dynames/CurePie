import React, { Component, PropTypes } from 'react';
import { GoogleApiWrapper, Map } from 'google-maps-react';
import { createContainer } from 'meteor/react-meteor-data';

import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Events } from '../api/events.js';

export class MapContainer extends Component {

    getEvents = () => {
        console.log(this.props.events);
        //for (i = 0; i < this.props.events.length; i++){
        //    console.log(this.props.events[i].name);
        //}
    }

    render() {

        const style = {
            width: '100vw',
            height: '100vh'
        }

        if (!this.props.loaded) {
            return <div>Loading...</div>
        }
        
        return (
            <div style={style}>
                <Map google={this.props.google} />

                <MuiThemeProvider>
                    <RaisedButton
                        className="btn"
                        label="Home"
                        onClick={this.props.switchToHome}
                    />
                </MuiThemeProvider>

                {this.getEvents()}

            </div>
        );
    }
}

MapContainer.propTypes = {
    events: PropTypes.array.isRequired
};  
 
createContainer(() => {
    return {
        events: Events.find({}).fetch(), 
    };  
}, MapContainer);

export default GoogleApiWrapper({
      apiKey: "AIzaSyDxI0mCeLq2o0YTatFKIRY2IE9n9ttuQOo"
})(MapContainer)
