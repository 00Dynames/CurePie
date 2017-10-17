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

	render() {

    const buttonStyle = {
     backgroundColor: 'transparent',
     color: 'white',
		 position: 'relative',
		 top:5
    };

    const rightButtons = (
     <div>
       <FlatButton label="List View" style={buttonStyle} onClick={this.props.switchToList} />
       <FlatButton label="Map View" style={buttonStyle} onClick={this.props.switchToMap} />
       <FlatButton label="Sign-in/Register" style={buttonStyle} onClick={this.props.switchToLogin} />
     </div>
    );

		return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <AppBar
          title={<span style={styles.title} className="font1"><img style={ {width:40, height:40, position:'relative', top:10} } src='/images/bridge1-white.png'></img>&ensp;THE BRIDGE PROJECT</span>}
            onLeftIconButtonTouchTap={this.handleToggle}
            iconElementRight={rightButtons}
            onTitleTouchTap={this.props.switchToHome}
          />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Drawer
            docked={false}
            width={300}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <h1>Logged In As: GUEST</h1>
            <MenuItem onClick={this.clickHome}>Home</MenuItem>
            <MenuItem onClick={this.clickLogin}>Login</MenuItem>
          </Drawer>
        </MuiThemeProvider>
      </div>

    )

  }
}

export default AppBarExampleIconButton;
