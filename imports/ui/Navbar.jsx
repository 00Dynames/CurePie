import React, { Component, PropTypes } from 'react';

import AppBar from 'material-ui/AppBar';
import * as Colors from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconMenu from 'material-ui/IconMenu';



function handleTouchTap() {
  alert('onClick triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
    float: 'left'
  },
};

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: Colors.grey900,
  },
});

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */


class AppBarExampleIconButton extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.clickLogin = this.clickLogin.bind(this);
    this.clickHome = this.clickHome.bind(this);
    this.clickLogout = this.clickLogout.bind(this);
    this.clickFavEvents = this.clickFavEvents.bind(this);
    this.clickRecentViewed = this.clickRecentViewed.bind(this);
    this.clickSettings = this.clickSettings.bind(this);
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  clickHome() {
    this.props.switchToHome();
    this.handleClose();
  }
  clickLogin() {
    this.props.switchToLogin();
    this.handleClose();
  }
  clickLogout() {
    this.props.logout();
    this.handleClose();
  }
  clickFavEvents() {
    this.props.switchToFavEvents();
    this.handleClose();
  }
  clickRecentViewed() {
    this.props.switchToRecentViewed();
    this.handleClose();
  }
  clickSettings() {
    this.props.switchToSettings();
    this.handleClose();
  }
	render() {

    const buttonStyle = {
     backgroundColor: 'transparent',
     color: 'white',
		 position: 'relative',
		 top:5
    };

    var loginButtonOrWelcome;
    if (this.props.user == '') {
      loginButtonOrWelcome =
        <FlatButton label="Sign-in/Register" style={buttonStyle} onClick={this.props.switchToLogin} />
    } else {
      loginButtonOrWelcome =
        <IconMenu
        iconButtonElement={<FlatButton label={"Hi "+ this.props.user} style={buttonStyle}/>}
        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
        >
          <MenuItem primaryText="Sign out" onClick={this.props.logout} />
        </IconMenu>
    }

    var drawer;
    if (this.props.user == '') {
      drawer = <Drawer
        docked={false}
        width={300}
        open={this.state.open}
        onRequestChange={(open) => this.setState({open})}
      >
        <h3>Logged In As: GUEST</h3>
      </Drawer>
    } else {
      drawer = <Drawer
        docked={false}
        width={300}
        open={this.state.open}
        onRequestChange={(open) => this.setState({open})}
      >
        <h3>Logged In As: {this.props.user}</h3>
        <MenuItem onClick={this.clickRecentViewed}>Recently Viewed Events</MenuItem>
        <MenuItem onClick={this.clickFavEvents}>Favourite Events</MenuItem>
        <MenuItem onClick={this.clickSettings}>Settings</MenuItem>
      </Drawer>
    }

    const rightButtons = (
     <div>
       <FlatButton label="List View" style={buttonStyle} onClick={this.props.switchToList} />
       <FlatButton label="Map View" style={buttonStyle} onClick={this.props.switchToMap} />
       {loginButtonOrWelcome}
     </div>
    );

		return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <AppBar
          title={<span style={styles.title} className="font1">THE BRIDGE PROJECT&ensp;<img style={ {width:40, height:40, position:'relative', top:10} } src='/images/bridge1-white.png'></img></span>}
            onLeftIconButtonTouchTap={this.handleToggle}
            iconElementRight={rightButtons}
            onTitleTouchTap={this.props.switchToHome}
          />
        </MuiThemeProvider>
        <MuiThemeProvider>
          {drawer}
        </MuiThemeProvider>
      </div>

    )

  }
}

export default AppBarExampleIconButton;
