import React, { Component, PropTypes } from 'react';

export default class Navbar extends Component{

    goHome = () => {
        this.setState({page: 'Home'});
    }

    render(){
        return(
            <nav class="navbar navbar-default">
                <div >
                    <a href="#" class="brand-logo"
                        onClick={this.goHome}
                    >Logo</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
