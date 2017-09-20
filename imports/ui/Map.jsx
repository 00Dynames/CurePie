import React, { Component, PropTypes } from 'react';
import { GoogleApiWrapper, Map } from 'google-maps-react';

import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class MapContainer extends Component {
    
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

            </div>
        )
    }
}

export default GoogleApiWrapper({
      apiKey: "AIzaSyDxI0mCeLq2o0YTatFKIRY2IE9n9ttuQOo"
})(MapContainer)
