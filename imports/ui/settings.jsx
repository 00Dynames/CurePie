import React, {Component} from 'react';
import * as Colors from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  heading: {
    textAlign: "center"
  },
};

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: Colors.grey900,
  },
});

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.clickDone = this.clickDone.bind(this);
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  clickDone = () => {
    this.props.switchToHome();
    this.handleClose();
  }

  render() {
    const actions = [
      <FlatButton
        label="Back To Home"
        primary={true}
        onClick={this.clickDone}
      />,
    ];

    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div style={styles.heading}>
            <h2 style={styles.headline}>Change Password</h2>
            <TextField hintText="Password" type="password"/> <br/>
            <TextField hintText="Confirm Password" type="password"/>
            <br/>
            <br/>
            <RaisedButton label="Done" onClick={this.handleOpen} />
          </div>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Dialog
            title="Password Changed!!"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            Your password has been changed.
          </Dialog>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Settings
