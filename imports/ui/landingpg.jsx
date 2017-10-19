import React, { Component } from 'react';
import {grey100, yellow700} from 'material-ui/styles/colors';
import SearchBar from 'material-ui-search-bar'

// MATERIAL UI THINGS
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import '../css/landingpg.css'
import SocialBar from './social.jsx'
import {ApSlideshow, ApSlideshowStyle } from 'apeman-react-slideshow';

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

					<div className="font1 headings title-text"><img src='/images/bridge1-white.png' className='title-img'></img>
					<br></br>
					The Bridge Project</div>
						<div id="search-bar-container">
							<MuiThemeProvider>
								<SearchBar
									onChange={() => console.log('onChange')}
									onRequestSearch={() => console.log('onRequestSearch')}
									hintText="SEARCH"
									style={{
										margin: '0 auto',
										maxWidth: 280,
									}}
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
                                    onClick={this.props.switchToList}
								/>
							<RaisedButton
									className="btn"
                                    label="View as Map"
                                    onClick={this.props.switchToMap}
								/>
								</div>
							</MuiThemeProvider>
						</div>

			</div>
		);
	}
}

class Slides extends Component {
	render() {
		return (
			<div>
				<ApSlideshowStyle />
        <ApSlideshow images={[
                    './images/charity.jpg',
										'./images/volunteer.jpg',
                    './images/redcross.jpg',
										'./images/fire.jpg'
                ]}
                     repeat={ true }
                     width={ '100%' }
                     height={ 500 }
										 interval={ 5000 }
        />
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
					<p className='font2 about-text'>Lorem ipsum dolor sit amet, pri an option persius appetere, ex iriure aperiam necessitatibus nec. Debet deterruisset necessitatibus pro id, per in congue possim pericula, tota mutat labore nec eu. Ea laudem offendit eloquentiam vel, saepe pertinax ei ius. Ut tollit gubergren pri, vide lorem suscipit ne vim, doctus dignissim usu in.
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
				<div className='filler-item' id='slogan-container'>
					<Slides />possible slideshow here!!!
      	</div>
			<div className='filler-item font3'id='slogan'>
				Find<br></br>Your<br></br>Cause</div>
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
					<div id='team-container' className='font2'>
						<div className='team-item'><img className="team-img" src='/images/fire.jpg'/><div>Mahika Suri</div></div>
						<div className='team-item'><img className="team-img" src='/images/fire.jpg'/><div>Dennis Bunadi</div></div>
						<div className='team-item'><img className="team-img" src='/images/fire.jpg'/><div>Jacqueline Lee</div></div>
						<div className='team-item'><img className="team-img" src='/images/vivian.jpg'/><div>Vivian Dang</div></div>
						<div className='team-item'><img className="team-img" src='/images/chris.jpg'/><div>Christine Bui</div></div>
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
				<div id='footer-container' className='font3	'>
          <div id='footer-links'>
            <div onClick={this.props.switchToList}>Home</div>
            |
            <div>About us</div>
            |
            <div>Sitemap</div>
          </div>
						&copy; The Bridge Project 2017   |   All rights reserved<br />
				</div>
			</div>
		);
	}
}
class Exp extends Component {
	render() {
		return (
			<div>
				<Open switchToMap={this.props.switchToMap.bind(this)} switchToList={this.props.switchToList.bind(this)} />
				<SocialBar />
				<About />
				<Filler />
				<Team />
				<Footer />
			</div>
		)
	}
}
export default Exp;
