import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class DonationDialogue extends Component {
    state = {open: false};

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    donationForm = () => {
        return (
            <form onSubmit={console.log("SUBMIT")} >
                <input type="text" />
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
                key="submit"
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
        ] ;

        return (
            <div>
                <RaisedButton label="Dialog" onClick={this.handleOpen} />
                <Dialog
                    title={"Donate to " + this.props.name}
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                The actions in this window were passed in as an array of React objects.
                {this.donationForm()}
                </Dialog>
            </div>
        );
    }
}
