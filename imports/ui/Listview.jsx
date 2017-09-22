import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';

import '../css/Listview.css'

const style = {
  margin: 12,
};

class Heading extends Component {
  render() {
    return (
      <div className="event-description">
        <div className="main-title">Where can you make a difference</div>
        <br></br>
        <MuiThemeProvider>
          <Divider />
        </MuiThemeProvider>
      </div>
    );
  }
}

class Description extends Component {
  render() {
    return (
      <div id='all-events'>
        <div className = "Filters-panel">helerkjtrkj</div>
        <div className="Event-box">First one
        </div>
      </div>
    )
  }
}

class Main extends Component {
  render() {
    return (
      <div>
        <Heading />
        <Description />
      </div>
    )
  }
}

export default Main
