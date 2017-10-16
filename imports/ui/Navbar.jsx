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
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

	render() {

    const buttonStyle = {
     backgroundColor: 'transparent',
     color: 'white'
    };

    const rightButtons = (
     <div>
       <FlatButton label="List View" style={buttonStyle} onClick={this.props.switchToList} />
       <FlatButton label="Map View" style={buttonStyle} onClick={this.props.switchToMap} />
       <FlatButton label="Login" style={buttonStyle} onClick={this.props.switchToLogin} />
     </div>
    );

    const sideBar = {
      <Drawer
        docked={false}
        width={200}
        open={this.state.open}
        onRequestChange={(open) => this.setState({open})}
      >
        <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
        <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
      </Drawer>
    }

		return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar
          title={<span style={styles.title}>The Curepie Project</span>}
          onTitleTouchTap={this.props.switchToHome}
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={rightButtons}
        />
      </MuiThemeProvider>
    )

  }
}

export default AppBarExampleIconButton;
