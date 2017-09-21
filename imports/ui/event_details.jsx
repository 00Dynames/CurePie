import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import '../css/event_details.css'

const style = {
  margin: 12,
};

class Popup extends Component {
  render() {
    return (
      <div className="event-description">
        <div className="main-title">Hurricane Irma</div>
        <br></br>
        <MuiThemeProvider>
          <Divider />
        </MuiThemeProvider>
      </div>
    );
  }
}

class Info extends Popup {
  render() {
    return (
      <div id='details-container'>
        <div className="panel-container">
            <div className="panel-image"></div>
            <Summary />
          </div>
        <div className="info-block">
          <div className="info-heading">What's happening</div>
            <p>
              Hurricane Irma was an extremely powerful and catastrophic Cape Verde type hurricane, the strongest observed in the Atlantic since Dean in 2007 in terms of maximum sustained winds. It was also the most intense Atlantic hurricane to strike the United States since Katrina in 2005, and the first major hurricane to make landfall in Florida since Wilma in 2005. The ninth named storm, fourth hurricane, and second major hurricane of the 2017 Atlantic hurricane season, Irma caused widespread and catastrophic damage throughout its long lifetime, particularly in parts of the northeastern Caribbean and the Florida Keys.
            </p>
          <div className="info-heading">News Articles</div>
            <ul>
              <li><a href="https://www.wired.com/story/hurricane-irma-a-practically-impossible-storm/">wired.com - Hurricane Irma</a></li>
            </ul>
            <Charities />
        </div>
      </div>
    );
  }
}
class Summary extends Component {
  render() {
    return (
      <table id='summary-table'>
        <tr>
          <h1>Date: </h1>
          <td>30 August 2017 – 15 September 2017</td>
        </tr>
        <tr>
          <h1>Location: </h1>
          <td>Florida USA, Caribbean Islands</td>
        </tr>
        <tr>
          <h1>Category: </h1>
          <td>Hurricane, Category 5</td>
        </tr>
        <tr>
          <h1>Population Affected:</h1>
          <td>6 million people affected</td>
        </tr>
        <tr>
          <h1>Status: </h1>
          <td>State of Emergency, Ongoing</td>
        </tr>
      </table>
    )
  }
}

class Charities extends Component {
  render() {
    return (
      <div className="Charities-block">
        <div className="info-heading">Charities Currently Involved</div>
        <table id="Charities-table">
          <tr>
            <th>Name</th>
            <th>Role</th>
          </tr>
          <tr>
            <td><a href="http://www.redcross.org.au/news/hurricane-irma-rips-through-the-caribbean.aspx">Red Cross</a></td>
            <td>First Aid, Shelter, Water</td>
          </tr>
          <tr>
            <td><a href="https://www.oxfam.org.au/2017/09/hurricane-irma-oxfam-is-ready-to-save-lives/">Oxfam</a></td>
            <td>Assisting with Evacuations</td>
          </tr>
          <tr>
            <td><a href="https://www.americares.org/en/newsroom/news/2017/0907-Irma/">Americares</a></td>
            <td>Medicine, supplies and health services</td>
          </tr>
        </table>
      </div>
    )
  }
}
class Footer extends Component {
	render() {
		return (
			<div>
				<div className="green-line"></div>
				<div id='footer-container'>
				</div>
			</div>
		);
	}
}
class Main extends Component {
  render() {
    return (
      <div>
        <Popup />
        <Info />
        <Footer />
      </div>
    )
  }
}

export default Main;
