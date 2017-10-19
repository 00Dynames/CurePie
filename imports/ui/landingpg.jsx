import React, { Component } from 'react';
import {grey100, yellow700} from 'material-ui/styles/colors';
import SearchBar from 'material-ui-search-bar'

// MATERIAL UI THINGS
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
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

    var name;
    if (!this.props.loggedIn) {
      name = "The Bridge Project"
    } else {
      name = "Welcome, " + this.props.user + "!"
    }

		return (
			<div className="title-bg">

					<div className="font1 headings title-text"><img src='/images/bridge1-white.png' className='title-img'></img>
					<br></br>
					{name}</div>
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
			<div className='text-container' id='whatwedo'>
				<div>
					<div className="font1 headings">What we Do</div>
					<p className='font2 about-text'>Here at The Bridge Project, we want to make sure that everyone in the public is well notified about the world's current humanitarian issues and crises. We believe that by doing so, we can raise awareness about important issues and encourage people to provide support where they can. In this project, we gather information from various sources, ultimately allowing everyone to make more informed decisions about where they can give their support across the globe.</p>
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
						<div className='team-item'><img className="team-img" src='/images/mahika.jpg'/><div>Mahika Suri</div></div>
						<div className='team-item'><img className="team-img" src='/images/dennis.jpg'/><div>Dennis Bunadi</div></div>
						<div className='team-item'><img className="team-img" src='/images/jacqueline.jpg'/><div>Jacqueline Lee</div></div>
						<div className='team-item'><img className="team-img" src='/images/vivian.jpg'/><div>Vivian Dang</div></div>
						<div className='team-item'><img className="team-img" src='/images/christinepic.jpg'/><div>Christine Bui</div></div>
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
				<div id='footer-container' className='font3'>
          <div id='footer-links'>
            <br />
            <MuiThemeProvider>
              <FlatButton label="HOME" className="btn" href='#' />
            </MuiThemeProvider>
            &emsp;|&emsp;
            <MuiThemeProvider>
              <FlatButton label="ABOUT US" className="btn" href='#whatwedo' />
            </MuiThemeProvider>
            &emsp;|&emsp;
            enquiries@thebridgeproject.com.au
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
				<Open switchToMap={this.props.switchToMap.bind(this)} switchToList={this.props.switchToList.bind(this)} loggedIn={this.props.loggedIn} user={this.props.user} />
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
