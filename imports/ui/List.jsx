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
        <p>Or, click on one of the tags below:</p>
        <div className="tags">
          <a href='#'>#hurricane</a><br />
          <a href='#'>#landslide</a><br />
          <a href='#'>#burma</a><br />
						<a href='#'>#children</a><br />
					<a href='#'>#poverty</a><br />
        </div>
      </div>
    )
  }
}

class Sort extends Component {
	render () {
		return (
			<div class="sort">
				<p>Sort by:</p>
			<MuiThemeProvider>
			 <DropDownMenu class="sort-dropdown">
				 <MenuItem primaryText="Most Recent"/>
				 <MenuItem primaryText="Most Searched"/>
			 </DropDownMenu>
		 </MuiThemeProvider>
		 </div>
		)
	}
}

class BreakingNews extends Component {
  render() {
    return (
      <div>
        <div className="news-title">Breaking News Events</div>
        <ul>
          <li>Tornado in North Carolina, USA devastates. Food and general provisions needed for donation.</li>
          <li>Volunteering Efforts in Myanmar making a difference.</li>
          <li>More events...</li>
        </ul>
      </div>
    )
  }
}

class LeftSideBar extends Component {
  render() {
    return (
      <div id='sidebar-container'>
        <SearchTag />
        <Tags />
				<Sort />
				<BreakingNews />
      </div>
    )
  }
}


export default LeftSideBar;
