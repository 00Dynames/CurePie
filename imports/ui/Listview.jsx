import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import { Events } from '../api/events.js';

import { teal600 } from 'material-ui/styles/colors';
// import './getheight.js';
import '../css/Listview.css'

const style = {
  margin: 12,
};

const paperstyle = {
	  height: 'calc(100vh - 160px)',
		width: '95%',
	  margin: 10,
	  textAlign: 'center',
	  display: 'inline-block',
};

const green = {
	color: teal600,
};
class Heading extends Component {
    render() {
        return (
            <div className="page-header" id='page-header'>
                <div className="event-title font3">Where you can make a difference</div>
                <MuiThemeProvider>
                    <Divider />
                </MuiThemeProvider>
            </div>
        );
    }
}

class Description extends Component {

    getEvents = () => {
        events = Events.find().fetch();
        result = [];
        for (i = 0; i < events.length; i++){
            console.log(events[i]);
            result.push(
                <div className="single-event">
										<img src='/images/fire.jpg' className='single-event-img'></img>
										<div className='single-event-text'>
	                    <div className="single-event-title font3">{events[i].name}</div>
												<hr className='title-info-divider'></hr>
	                    <div>{events[i].description.slice(0,500)}...</div>
	                    <div className="single-event-info">
												<strong className='color'>Type</strong>: {events[i].type}&emsp;
												<strong className='color'>Location</strong>: {events[i].location}</div>
										</div>
								</div>
            )
            //div className="Info">{events[i].date}</div>
         }
         return result;
     }


    render() {
        return (
            <div id='event-body-container' className='font2'>
                <div className= "sidebar">
									<SideBar />
                </div>
                <div className="events-panel" >
                    {this.getEvents().map((event) => (event))}
                </div>
            </div>
        )
    }
}

class SideBar extends Component {
	constructor(props) {
    super(props);
    this.state = {value: 1, searchval:''};
		this.handleSearch = this.handleSearch.bind(this);
		this.keyPress = this.keyPress.bind(this);
  }

	handleSearch = (event) => {
		this.setState({ searchval: event.target.value });
	}

	keyPress(e){
      if(e.keyCode == 13){
         console.log('SEARCHING FOR:', e.target.value);
      }
   }

  handleChange = (event, index, value) => this.setState({value});
	render() {
		return (
			<div className='sidebar-container font3'>

				<MuiThemeProvider>
					<Paper style={paperstyle} zDepth={3} className='sidebar-paper'>
						<TextField
							hintText="Search by keyword"
							className='search-bar'
							value={this.state.searchval}
							onKeyDown={this.keyPress}
							onChange={this.handleSearch}/>
						<div className='font3 sidebar-label'>view trending:</div>
							insert tags here i guess
						<br />
						<div className='font3 sidebar-label'>Sort by:</div>
						<DropDownMenu
							value={this.state.value}
							onChange={this.handleChange}
							className='sidebar-dropdown'
							selectedMenuItemStyle={ {color: '#00897b'} }
							autoWidth={false}
							style={ {width:'100%'} }>
			        <MenuItem value={1} primaryText="Most Recent" />
			        <MenuItem value={2} primaryText="Most Active" />
			        <MenuItem value={3} primaryText="Nearby" />
			      </DropDownMenu>
					</Paper>
				</MuiThemeProvider>
			</div>
		);
	}

}

export default class DescriptionBox extends Component {
    render() {
        return (
            <div id='page-container'>
                <Heading />
                <Description />
            </div>
        )
    }
}
