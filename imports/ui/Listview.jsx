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

class Listview extends Component {
	constructor(props) {
		super(props);
		this.state = {sortval: 'date', searchval:''};
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

	handleChange = (event, index, value) => {
		console.log(value);
		this.setState({sortval:value});
	}

	handleSort = (event) => {
		console.log(event.target.value);
		this.setState({sortval: event.target.value});
	}

    getEvents = () => {
        events = Events.find({"description": { $regex: '.*' + this.state.searchval + '.*', $options: "i"}} ).fetch();
        result = [];
        for (i = 0; i < events.length; i++){
            result.push(
                <div className="single-event">
										<img src='/images/fire.jpg' className='single-event-img'></img>
										<div className='single-event-text'>
	                    <div className="single-event-title font3">{events[i].name}</div>
												<hr className='title-info-divider'></hr>
	                    <div>{events[i].description.slice(0,500)}...</div>
	                    <div className="single-event-info">
												<strong className='color'>Type</strong>: {events[i].type}&emsp;
												<strong className='color'>Location</strong>: {events[i].location}&emsp;
												<strong className='color'>Date</strong>: {events[i].date}
											</div>
										</div>
								</div>
            )
         }
         return result;
     }


    render() {
        return (
            <div id='event-body-container' className='font2'>
                <div className= "sidebar">
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
													value={this.state.sortval}
													onChange={this.handleChange}
													className='sidebar-dropdown'
													selectedMenuItemStyle={ {color: '#00897b'} }
													autoWidth={false}
													style={ {width:'100%'} }>
									        <MenuItem value={'date'} primaryText="Most Recent" />
									        <MenuItem value={'pop'} primaryText="Most Active" />
									        <MenuItem value={'near'} primaryText="Nearby" />
									      </DropDownMenu>
											</Paper>
										</MuiThemeProvider>
									</div>
                </div>
                <div className="events-panel" >
                    {this.getEvents().map((event) => (event))}
                </div>
            </div>
        )
    }
}



export default class DescriptionBox extends Component {
    render() {
        return (
            <div id='page-container'>
                <Heading />
                <Listview />
            </div>
        )
    }
}
