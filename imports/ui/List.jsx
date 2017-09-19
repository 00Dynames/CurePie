import React, { Component, PropTypes } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class List extends Component{

    render(){
        return(
            <div>
                List page
                 <MuiThemeProvider>
                    <RaisedButton
                        className="btn"
                        label="Home"
                        onClick={this.props.switchToHome}
                    />
                </MuiThemeProvider>
            </div>
        );
    }
}

