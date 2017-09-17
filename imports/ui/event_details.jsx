import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';

import '../css/event_details.css'

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
  render() {
    return (
      <div>
        <Popup />
        <Panel />
      </div>
    )
  }
}

export default Main;
