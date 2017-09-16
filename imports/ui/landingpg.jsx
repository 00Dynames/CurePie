import React, { Component } from 'react';


// MATERIAL UI THINGS
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


import '../css/landingpg.css'

const style = {
	margin: 12,
};
const txtfld = () => (
		<MuiThemeProvider>
			<TextField
				ref='user'
				hintText='Username'
			/>
		</MuiThemeProvider>
);



const RaisedButtonExampleSimple = () => (
  <MuiThemeProvider>
    <div>
      <RaisedButton label="Default" style={style} />
      <RaisedButton label="Primary" primary={true} style={style} />
      <RaisedButton label="Secondary" secondary={true} style={style} />
      <RaisedButton label="Disabled" disabled={true} style={style} />
      <br />
      <br />
      <RaisedButton label="Full width" fullWidth={true} />
    </div>
  </MuiThemeProvider>
);



class Open extends Component {
	render() {
		return (
			<div className="open-screen-bg">
					<div className="headings open-screen-text">Name Here</div>
						<div>
							<MuiThemeProvider>
								<TextField
									className="search-bar"
									id='search-bar'
									ref='user'
									hintText='Search'
								/>
							</MuiThemeProvider>
						</div>
						<div id="list-view-btn-container">
							<MuiThemeProvider>
								<RaisedButton
									className="list-view-btn"
									label="View Events"
									style={style}
								/>
							</MuiThemeProvider>
						</div>
			</div>
		);
	}
}


class About extends Component {
	render() {
		return (
			<div>
				<div className="headings">aboot</div>
				<p>Lorem ipsum dolor sit amet, pri an option persius appetere, ex iriure aperiam necessitatibus nec. Debet deterruisset necessitatibus pro id, per in congue possim pericula, tota mutat labore nec eu. Ea laudem offendit eloquentiam vel, saepe pertinax ei ius. Ut tollit gubergren pri, vide lorem suscipit ne vim, doctus dignissim usu in.

Tollit vocibus pertinax ea duo, quo wisi graece nostrud ad. Falli iracundia pro ei, et vocent laboramus mnesarchum eum. At dicant audiam efficiantur eos, has iracundia euripidis abhorreant cu, an prompta placerat vix. Habemus minimum convenire sit ex. Eu sit nulla ridens quaeque, ad nec eruditi intellegebat.</p>

			</div>
		)
	}
}

class Exp extends Component {
	render() {
		return (
			<div>
				<Open />
				<About />
			</div>
		)
	}
}
export default Exp;
