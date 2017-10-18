import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
      primary1Color: Colors.teal600,
    },
});

export default class DonationDialogue extends Component {
    state = {open: false};

    handleOpen = () => {
        this.setState({open: true});
    };

   
    handleSubmit = (event) => {
        event.preventDefault();
    
        console.log(ReactDOM.findDOMNode(this.refs.firstName).value);
    }
 
    handleClose = () => {
        this.setState({open: false});
        this.handleSubmit();
    };
    
    donationForm = () => {
    
        styles = {
            block: {maxWidth: 'auto'},
            radioButton: {marginBottom: 16},
            
        };
    
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                My Donation:
                <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                    <RadioButton
                        value="20"
                        label="$20"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="50"
                        label="$50"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="100"
                        label="$100"
                        style={styles.radioButton}
                    />
                </RadioButtonGroup>
                <TextField floatingLabelText="Surprise us" onChange={this.change} />
                <br />My Details<br />
                <TextField floatingLabelText="First Name" ref="firstName" onChange={this.change} />      
                <TextField floatingLabelText="Family Name" onChange={this.change} />    
                <TextField floatingLabelText="Email" onChange={this.change} />  
                <TextField floatingLabelText="Telephone" onChange={this.change} />      
                <TextField floatingLabelText="Address" onChange={this.change} />    
                <TextField floatingLabelText="Family Name" onChange={this.change} />  
                <br />Card Details<br />
                <TextField floatingLabelText="Card number" onChange={this.change} />      
                <TextField floatingLabelText="Expiry date (MM/YY)" onChange={this.change} />    
                <TextField floatingLabelText="CCV" onChange={this.change} />  
                <TextField floatingLabelText="Name on card" onChange={this.change} />  
                <br />
            </form>
        );
    };

    render() {
        const actions = [
            <FlatButton
                key="cancel"
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
        ] ;

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
            <td>
                <RaisedButton label="Donate" primary={true} onClick={this.handleOpen} />
                <Dialog
                    title={"Donate to " + this.props.name}
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                
                {this.donationForm()}
                </Dialog>
            </td>
            </MuiThemeProvider>
        );
    }
}
