import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';

import '../css/event_details.css'
import { Events } from '../api/events.js';
import { createContainer } from 'meteor/react-meteor-data';

const style = {
  margin: 12,
};

class Popup extends Component {
  render() {
    return (
      <div className="event-description">
        <div className="headings title-text">Title</div>
          <div id="info-field-container">
          </div>
      </div>
    );
  }
}

class Panel extends Component {
  render() {
    return (
      <div className="panel-container">
        <div className="headings subtitle">Information</div>
        <div className="panel-image"></div>
        <h1>Location: </h1>
        <h1>Population affected: </h1>
        <h1>Category: </h1>
        <h1>Status: </h1>
        <h1>Funds Raised: </h1>
      </div>
    );
  }
}

class Main extends Component {

    getEvents = () => {
        console.log("getto!");
        for (i = 0; i < this.props.events.length; i ++){
            console.log(this.props.events[i].name);
        }
    }
    
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <RaisedButton
                        className="btn"
                        label="Home"
                        onClick={this.props.switchToHome}
                    />
                </MuiThemeProvider>
                <Popup />
                <Panel />
                {this.getEvents()}
            </div>
        )
    }
}

Main.propTypes = {
    events: PropTypes.array.isRequired
};

export default createContainer(() => {
    return {
        events: Events.find({}).fetch(),
    };
}, Main);


