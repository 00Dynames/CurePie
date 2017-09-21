import React, { Component, PropTypes } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBar from 'material-ui-search-bar'
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import '../css/listView.css'

class List extends Component {
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

class SearchTag extends Component {
  render() {
    return (
      <div id="search-bar-container">
        <MuiThemeProvider>
          <SearchBar
            onChange={() => console.log('onChange')}
            onRequestSearch={() => console.log('onRequestSearch')}
            hintText="SEARCH"
            style={{
              margin: '0 auto',
              maxWidth: 280,
            }}
          />
        </MuiThemeProvider>
      </div>
    )
  }
}

class Tags extends Component {
  render () {
    return (
      <div>
        Or Click on one of the tags below:
        <div className="tags">
          #hurricane<br />
          #burma<br />
          #landslide<br />
          #poverty<br />
          #children<br />
        </div>
      </div>
    )
  }
}

class sortDropdown extends Component {
  render () {
    return (
    )
  }
}


class LeftSideBar extends Component {
  render() {
    return (
      <div>
        <SearchTag />
        <Tags />
        <DropDownMenuSimpleExample />
      </div>
    )
  }
}


export default LeftSideBar;
