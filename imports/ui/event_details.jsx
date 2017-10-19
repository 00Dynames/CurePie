import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
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
import DonationDialogue from './donateDialogue.jsx';
import SocialBar from './social.jsx'

const style = {
    margin: 12,
};

class Popup extends Component {
    render() {
        return (
            <div className="event-description">
                <div className="main-title">{this.props.name}</div>
								<br />
                <MuiThemeProvider>
                    <Divider />
                </MuiThemeProvider>
            </div>
        );
    }
}

class Help_Popup extends Component {
    state = {
      showDiv: true,
    }
    render() {
      const { showDiv } = this.state
      return (
        <div>
          { showDiv && (
            <div id="help-popup">
              <button className="closebtn" onClick={() => this.setState({ showDiv: !showDiv })}>X</button>
              <p>How can you help?</p>
              <ol>
                <li>Find a charity you would like to support</li>
                <li>Select the amount you would like to donate</li>
                <li>Select the donate button to finalise your donation</li>
              </ol>
            </div>
          )}
        </div>
      )
    }
}

class Info extends Popup {

    getNewsArticles = () => {
        result = [];
        for(i = 0; i < this.props.event.news.length; i++){
            result.push(<li><a href={this.props.event.news[i]}  target="_blank">{this.props.event.news[i]}</a></li>)
        }
        return result;
    }

    getNews = (topic) => {
        subscription = Meteor.subscribe("getNews");
        Session.setDefault('news', []);
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
            <div id='details-container' className='font2'>
							<div className='panel-container'>
							<MuiThemeProvider>
								<Paper style={ {width:300, height:580, position:'absolute', left:40}} zDepth={3}>
                    <div className="panel-image"></div>
                    <Summary
                        date={this.props.event.date}
                        location={this.props.event.location}
                        affected={this.props.event.affected}
                        type={this.props.event.type}
                        loggedIn={this.props.loggedIn}
                    />
								</Paper>
								</MuiThemeProvider>
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
                    <Charities moneyDonated={this.props.event.moneyDonated} charities={this.props.event.charities} loggedIn={this.props.loggedIn} name={this.props.event.name} />
                </div>
            </div>
        );
    }
}

class Summary extends Component {

    constructor(props) {
      super(props);
      this.state = {open: false};
    }

    handleOpen = () => {
      this.setState({open: true});
    };

    handleClose = () => {
      this.setState({open: false});
    };



    render() {

      var FavButton;
      if (this.props.loggedIn){
        FavButton =
          <div>
            <MuiThemeProvider>
              <RaisedButton
                  className="btn"
                  label="Bookmark"
                  onClick={this.handleOpen}
              />
             </MuiThemeProvider>
             <MuiThemeProvider>
               <Dialog
                 title="Success"
                 actions={
                   <FlatButton
                     label="OK!"
                     primary={true}
                     onClick={this.handleClose}
                   />
                 }
                 modal={false}
                 open={this.state.open}
                 onRequestClose={this.handleClose}
               >
                 Bookmark Added!
               </Dialog>
             </MuiThemeProvider>
           </div>
        }

        return (
            <div>
              <table id='summary-table'>
                  <tr>
                      <td className='summary-field'>Date:</td>
                      <td className='summary-value'>{this.props.date}</td>
                  </tr>
                  <tr>
                      <td className='summary-field'>Location: </td>
                      <td className='summary-value'>{this.props.location}</td>
                  </tr>
                  <tr>
                      <td className='summary-field'>Category: </td>
                      <td className='summary-value'>{this.props.type}</td>
                  </tr>
                  <tr>
                      <td className='summary-field'>Population Affected:</td>
                      <td className='summary-value'>{this.props.affected}</td>
                  </tr>
                  <tr>
                      <td className='summary-field'>Status: </td>
                      <td className='summary-value'>State of Emergency, Ongoing</td>
                  </tr>
              </table>
              {FavButton}
            </div>
        )
    }
}

class Charities extends Component {

    donateButton = () => {
        console.log(this.props.loggedIn);
        if (this.props.loggedIn){
            return (<MuiThemeProvider>
                        <RaisedButton
                            className="btn"
                            label="Donate"
                            key={this.props.charities[i].name}
                            onClick={this.props.switchToMap}
                        />
                   </MuiThemeProvider>);
        }
    }

    donateColumn = () => {
        if (this.props.loggedIn){
            //return <td>{this.donateButton()}</td>;
            return (
                <MuiThemeProvider>
                    <DonationDialogue name={this.props.name} />
                </MuiThemeProvider>
                );
        }
    }

    getcharities = () => {

        result = [];
        for (i = 0; i < this.props.charities.length; i ++){
            result.push(
                <tr>
                    {this.donateColumn()}
                    <td><a href={this.props.charities[i].url} target = "_blank">{this.props.charities[i].name}</a></td>
                    <td>{this.props.charities[i].description}</td>
                    <td>{this.props.moneyDonated}</td>
                </tr>
            )
        }
        return result;
    }


    render() {

        donateTitle = (this.props.loggedIn) ? <th></th> : "";

        return (
            <div className="Charities-block">
                <div className="info-heading">Charities Currently Involved</div>
                <table id="Charities-table">
                    <tr>
                        {donateTitle}
                        <th>Name</th>
                        <th>Role</th>
                    </tr>
                    {this.getcharities().map((charity) => (charity))}
                </table>
            </div>
        )
    }
}

class EventDetails extends Component {

    render() {
        console.log(this.props.event);
        return (
            <div>
                <SocialBar />
                <Popup name={this.props.event.name} />
                <Help_Popup />
                <Info loggedIn={this.props.loggedIn} event={this.props.event} />
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
