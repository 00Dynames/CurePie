import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

import { Events } from '../api/events.js';
// import './getheight.js';
import '../css/Listview.css'

const style = {
  margin: 12,
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
									this will be the sidebar!!!!!!!!!!!!!!!!!!!!!!!
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
                <Description />
            </div>
        )
    }
}
