import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

import '../css/Listview.css'
{/*import Footer from './landingpg.jsx'*/}

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
        <div className= "Filters-panel"></div>
        <div className="Event-panel">
          <div className="Event-box">
            <div className="Subtitle1">Hurricane Irma</div>
            <p>Hurricane Irma was an extremely powerful and catastrophic Cape Verde type hurricane</p>
            <div className="Info">Location: Florida USA, Caribbean Islands</div>
            <div className="Info">Date: 30 August 2017 – 15 September 2017</div>
        </div>
          <div className="Event-box">
            <div className="Subtitle1">Hurricane Harvey</div>
            <p>Hurricane Harvey was an extremely destructive Atlantic hurricane which became the first major hurricane to make landfall in the United States since Wilma in 2005</p>
            <div className="Info">Location: East and South United States</div>
            <div className="Info">Date: 17 August 2017</div>
          </div>
          <div className="Event-box">
            <div className="Subtitle1">Chiapas Earthquake</div>
            <p>The 2017 Chiapas earthquake struck at 23:49 CDT on 7 September (local time; 04:49 on the 8th UTC) in the Gulf of Tehuantepec off the southern coast of Mexico, near Chiapas,</p>
            <div className="Info">Location: Chiapas, Oaxaca, Mexico City</div>
            <div className="Info">Date: 7 September 2017</div>
          </div>
          <div className="Event-box">
            <div className="Subtitle1">Name of humanitarian event</div>
            <p>Lorem ipsum dolor sit amet, pri an option persius appetere, ex iriure aperiam necessitatibus nec. Debet deterruisset necessitatibus pro id</p>
            <div className="Info">Location: Location of humanitarian event</div>
            <div className="Info">Date: Date of occurence</div>
          </div>
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
