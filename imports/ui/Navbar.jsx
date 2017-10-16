import React, { Component, PropTypes } from 'react';

import AppBar from 'material-ui/AppBar';
import * as Colors from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


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
	render() {

    const buttonStyle = {
     backgroundColor: 'transparent',
     color: 'white',
		 position: 'relative',
		 top:5
    };

    const rightButtons = (
     <div>
       <FlatButton label="List View" style={buttonStyle} onClick={this.props.switchToList}/>
       <FlatButton className='font1' label="Map View" style={buttonStyle} onClick={this.props.switchToMap} />
     </div>
    );

		return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar
          title={<span style={styles.title} className="font1"><img style={ {width:40, height:40, position:'relative', top:10} } src='/images/bridge1-white.png'></img>&ensp;THE BRIDGE PROJECT</span>}
          onTitleTouchTap={this.props.switchToHome}
          iconElementLeft={<div> </div>}
          iconElementRight={rightButtons}
        />
      </MuiThemeProvider>
    )

  }
}

export default AppBarExampleIconButton;
