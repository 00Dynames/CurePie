import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

import * as Colors from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  signin: {
    textAlign: "center"
  },
};


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: Colors.grey900,
  },
});

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

const Signintabs = (func) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Tabs>
      <Tab label="Sign-In" >
        <div style={styles.signin}>
          <h2 style={styles.headline}>Sign-In</h2>
          <TextField hintText="Username"/>
          <br/>
          <TextField hintText="Password" type="password"/>
          <br/>
          <br/>
          <RaisedButton label="Sign-in" primary={true} onClick={func}/>
        </div>
      </Tab>
      <Tab label="Register" >
        <div style={styles.signin}>
          <h2 style={styles.headline}>Register</h2>
          <TextField hintText="Username"/>
          <br/>
          <TextField hintText="Password" type="password"/>
          <br/>
          <TextField hintText="Confirm Password" type="password"/>
          <br/>
          <br/>
          <RaisedButton label="Register" primary={true} onClick={func}/>
        </div>
      </Tab>
    </Tabs>
  </MuiThemeProvider>
);

export default Signintabs
