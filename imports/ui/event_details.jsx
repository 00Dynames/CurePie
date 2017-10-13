import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

import '../css/event_details.css'
import { Events } from '../api/events.js';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';

const style = {
    margin: 12,
};

class Popup extends Component {
    render() {
        return (
            <div className="event-description">
                <div className="main-title">{this.props.name}</div>
                <br></br>
                <MuiThemeProvider>
                    <Divider />
                </MuiThemeProvider>
            </div>
        );
    }
}

class Info extends Popup {

    getNewsArticles = () => {
        result = [];
        for(i = 0; i < this.props.event.news.length; i++){
            result.push(<li><a href={this.props.event.news[i]}>{this.props.event.news[i]}</a></li>)
        }
        return result;
    }

    getNews = (topic) => {
        subscription = Meteor.subscribe("getNews");
        Meteor.call('getNews', topic, (error, result, n) => {
            if(error){
                //console.log(error);
                return false;
            } else {
                console.log(result);
                Session.set('news', result);
            }
        });
        news = Session.get('news');
        result = [];
        console.log(news);
        for (i = 0; i < news.length; i ++){
            result.push(<li><a href={news[i].webUrl}>{news[i].webTitle}</a></li>);
        }
        return result;
    }

    render(){
        return (
            <div id='details-container'>
                <div className="panel-container">
                    <div className="panel-image"></div>
                    <Summary 
                        date={this.props.event.date}
                        location={this.props.event.location}
                        affected={this.props.event.affected}
                        type={this.props.event.type}
                    />
                </div>
                <div className="info-block">
                    <div className="info-heading">What's happening</div>
                    <p>
                        {this.props.event.description} 
                    </p>
                    <div className="info-heading">News Articles</div>
                    <ul>    
                        {this.getNewsArticles().map((article) => (article))}
                        {this.getNews(this.props.event.name).map((article) => (article))}
                    </ul>
                    <Charities charities={this.props.event.charities} />
                </div>
            </div>
        );
    } 
}

class Summary extends Component {
  
    render() {
        return (
            <table id='summary-table'>
                <tr>
                    <h1>Date: </h1>
                    <td>{this.props.date}</td>
                </tr>
                <tr>
                    <h1>Location: </h1>
                    <td>{this.props.location}</td>
                </tr>
                <tr>
                    <h1>Category: </h1>
                    <td>{this.props.type}</td>
                </tr>
                <tr>
                    <h1>Population Affected:</h1>
                    <td>{this.props.affected}</td>
                </tr>
                <tr>
                    <h1>Status: </h1>
                    <td>State of Emergency, Ongoing</td>
                </tr>
            </table>
        )
    }
}

class Charities extends Component {

    getcharities = () => {

        result = [];
        for (i = 0; i < this.props.charities.length; i ++){
            result.push(
                <tr>
                    <td><a href={this.props.charities[i].url} target = "_blank">{this.props.charities[i].name}</a></td>
                    <td>{this.props.charities[i].description}</td>
                </tr>
            )
        }
        return result;
    }


    render() {
        return (
            <div className="Charities-block">
                <div className="info-heading">Charities Currently Involved</div>
                <table id="Charities-table">
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                    </tr>
                    {this.getcharities().map((charity) => (charity))}
                </table>
            </div>
        )
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

class EventDetails extends Component {

    render() {
        console.log(this.props.event);
        return (
            <div>
                <Popup name={this.props.event.name} />
                <Info event={this.props.event} />
                <Footer />
            </div>
        )
    }
}

EventDetails.propTypes = {
    events: PropTypes.array.isRequired
};

export default createContainer(() => {
    return {
        events: Events.find({}).fetch(),
    };
}, EventDetails);


