import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

import '../css/Listview.css'
{/*import Footer from './landingpg.jsx'*/}
import { Events } from '../api/events.js';

const style = {
  margin: 12,
};

class Heading extends Component {
    render() {
        return (
            <div className="event-description">
                <div className="main-title">Where can you make a difference</div>
                <br></br>
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
                <div className="Event-box">
                    <div className="Subtitle1">{events[i].name}</div>
                    <p>{events[i].description}</p>
                    <div className="Info">{events[i].location}</div>
                </div>
            )
            //div className="Info">{events[i].date}</div>
         }
         return result;
     }


    render() {
        return (
            <div id='all-events'>
                <div className= "Filters-panel"></div>
                <div className="Event-panel">
                    {this.getEvents().map((event) => (event))}
                </div>
            </div>
        )
    }
}

export default class DescriptionBox extends Component {
    render() {
        return (
            <div>
                <Heading />
                <Description />
            </div>
        )
    }
}
