import React, { Component } from 'react';
import FaIconPack from 'react-icons/lib/fa'
import test from 'react-icons/lib/fa/check';

import {grey100, yellow700} from 'material-ui/styles/colors';

// MATERIAL UI THINGS
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import '../css/landingpg.css'


const styles = {
  underlineStyle: {
    borderColor: yellow700,
  },
	inputStyle: {
		color: grey100,
	},
};




class Open extends Component {
	render() {
		return (
			<div className="title-bg">
					<div className="font1 headings title-text">The Bridge Project</div>
						<div id="search-bar-container">
							<MuiThemeProvider>
								<TextField
									className="search-bar"
									ref='user'
									hintText='Search'
									underlineFocusStyle={styles.underlineStyle}
									inputStyle={styles.inputStyle}
								/>
							</MuiThemeProvider>
						</div>
						<div id="btn-container">
							<MuiThemeProvider>
								<div>
								<RaisedButton
									icon={<test />}
									className="btn"
									label="View Events"
								/>
							<RaisedButton
									className="btn"
									label="View as Map"
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
				<div>
					<div className="font1 headings">What we Do</div>
					<p>Lorem ipsum dolor sit amet, pri an option persius appetere, ex iriure aperiam necessitatibus nec. Debet deterruisset necessitatibus pro id, per in congue possim pericula, tota mutat labore nec eu. Ea laudem offendit eloquentiam vel, saepe pertinax ei ius. Ut tollit gubergren pri, vide lorem suscipit ne vim, doctus dignissim usu in.
					<br></br><br></br>
					Tollit vocibus pertinax ea duo, quo wisi graece nostrud ad. Falli iracundia pro ei, et vocent laboramus mnesarchum eum. At dicant audiam efficiantur eos, has iracundia euripidis abhorreant cu, an prompta placerat vix. Habemus minimum convenire sit ex. Eu sit nulla ridens quaeque, ad nec eruditi intellegebat.</p>
				</div>
			</div>
		)
	}
}

class Filler extends Component {
	render() {
		return (
			<div id='filler-container'>
				<div className='filler-item' id='slogan-container'>possible slideshow here!!!</div>
				<div className='filler-item' id='slogan'>Find<br></br>Your<br></br>Cause</div>
			</div>
		);
	}
}

class Team extends Component {
	render() {
		return (
			<div className='text-container'>
				<div>
					<div className="font1 headings">Meet The Team</div>
					<div className="font1"><br></br>QT3.14</div>
					<div id='team-container'>
						<div className='team-item'><img className="team-img" src='/images/fire.jpg'/><div>Mahika Suri</div></div>
						<div className='team-item'><img className="team-img" src='/images/fire.jpg'/><div>Dennis Bunadi</div></div>
						<div className='team-item'><img className="team-img" src='/images/fire.jpg'/><div>Jin Jie Lee</div></div>
						<div className='team-item'><img className="team-img" src='/images/fire.jpg'/><div>Vivian Dang</div></div>
						<div className='team-item'><img className="team-img" src='/images/fire.jpg'/><div>Christine Bui</div></div>
					</div>
				</div>
			</div>
		);
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
class Exp extends Component {
	render() {
		return (
			<div>
				<Open />
				<About />
				<Filler />
				<Team />
				<Footer />
			</div>
		)
	}
}
export default Exp;
