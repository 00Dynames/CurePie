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
                <div className="event-title font1">Where you can make a difference</div>
								<div className="green-line"></div>
            </div>
        );
    }
}

class Listview extends Component {
	constructor(props) {
		super(props);
		this.state = {sortval: 'name', searchval:''};

		this.handleSearch = this.handleSearch.bind(this);
		this.keyPress = this.keyPress.bind(this);
		this.sortResults = this.sortResults.bind(this, this.state.sortval);
		this.handleTag = this.handleTag.bind(this);
	}

	handleSearch = (event) => {
		this.setState({ searchval: event.target.value });
	}
	keyPress(e){
			if(e.keyCode == 13){
				 console.log('SEARCHING FOR:', e.target.value);
			}
	 }

	sortResults = (event, index, value) => {
		this.setState({ sortval : value });
		this.state.sortval = value;
		console.log(value + ' ' + this.state.sortval + ' ' + event)
	}

	handleTag = (event) => {
		this.setState( {searchval: event })
	}

    getEvents = () => {
				// events = Events.find({"description": { $regex: '.*' + this.state.searchval + '.*', $options: "i"}}, {sort: this.sort }).fetch();
				if (this.state.sortval == 1) {
					events = Events.find({"description": { $regex: '.*' + this.state.searchval + '.*', $options: "i"}}, {sort: { 'location' : 1 } }).fetch();
				}
				else if (this.state.sortval == 2) {
					events = Events.find({"description": { $regex: '.*' + this.state.searchval + '.*', $options: "i"}}, {sort: { 'date' : 1 } }).fetch();
				}
				else if (this.state.sortval == 3) {
					events = Events.find({"description": { $regex: '.*' + this.state.searchval + '.*', $options: "i"}}, {sort: { 'affected' : -1 } }).fetch();
				}
				else {
					events = Events.find({"description": { $regex: '.*' + this.state.searchval + '.*', $options: "i"}}, {sort: { 'name' : 1 } }).fetch();
				}
				result = [];
        for (i = 0; i < events.length; i++){
            result.push(
                <div className="single-event">
										<img src='/images/fire.jpg' className='single-event-img' onClick={this.props.switchToEvent.bind(this, events[i])}></img>
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
												<br /><br />
												<div className='font3'>
													VIEW TRENDING:
													<div className='tags'>
														<a className='tag color'
															value={'irma'}
															onClick={() => this.handleTag('irma')}
															>#hurricaneirma</a>
														<a className='tag color'
															value={'us'}
															onClick={() => this.handleTag('us')}
															>#usa</a>
														<a className='tag color'
															value={'volunteer'}
															onClick={() => this.handleTag('volunteer')}
															>#volunteering</a>
														<a className='tag color'
															value={'apocalypse'}
															onClick={() => this.handleTag('apocalypse')}
															>#apocalypse2017</a>
														<a className='tag color'
															value={'earthquake'}
															onClick={() => this.handleTag('earthquake')}
															>#earthquake</a>
													</div>
												</div>
												<div className='font3 sidebar-label'>Sort by:</div>
												<DropDownMenu
													value={this.state.sortval}
													onChange={this.sortResults}
													className='sidebar-dropdown'
													selectedMenuItemStyle={ {color: '#00897b'} }
													autoWidth={false}
													style={ {width:'100%'} }>
									        <MenuItem value={'name'} primaryText="Alphabetical" />
									        <MenuItem value={'date'} primaryText="Most Recent" />
									        <MenuItem value={'affected'} primaryText="Most Active" />
									        <MenuItem value={'location'} primaryText="Nearby" />
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
                <Listview switchToEvent={this.switchToEvent.bind(this)}/>
            </div>
        )
    }
}
