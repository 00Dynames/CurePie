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


class Open extends Component {
	render() {
		return (
			<div className="title-bg">
					<div className="headings title-text">The Bridge Project</div>
						<div id="search-bar-container">
							<MuiThemeProvider>
								<TextField
									className="search-bar"
									ref='user'
									hintText='Search'
								/>
							</MuiThemeProvider>
						</div>
						<div id="btn-container">
							<MuiThemeProvider>
								<div>
								<RaisedButton
									className="list-view-btn"
									label="View Events"
									style={style}
								/>
								<RaisedButton
									className="map-view-btn"
									label="View as Map"
									style={style}
								/>
								</div>
							</MuiThemeProvider>
						</div>

			</div>
		);
	}
}


class About extends Component {
	render() {
		return (
			<div className='text-container'>
				<div className="headings">What we Do</div>
				<p>Lorem ipsum dolor sit amet, pri an option persius appetere, ex iriure aperiam necessitatibus nec. Debet deterruisset necessitatibus pro id, per in congue possim pericula, tota mutat labore nec eu. Ea laudem offendit eloquentiam vel, saepe pertinax ei ius. Ut tollit gubergren pri, vide lorem suscipit ne vim, doctus dignissim usu in.<br></br><br></br>Tollit vocibus pertinax ea duo, quo wisi graece nostrud ad. Falli iracundia pro ei, et vocent laboramus mnesarchum eum. At dicant audiam efficiantur eos, has iracundia euripidis abhorreant cu, an prompta placerat vix. Habemus minimum convenire sit ex. Eu sit nulla ridens quaeque, ad nec eruditi intellegebat.</p>

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
