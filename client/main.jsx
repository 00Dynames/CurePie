import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

//import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.jsx';
import Navbar from '../imports/ui/Navbar.jsx';

Meteor.startup(() => {
    render(<Navbar />, document.getElementById('navbar-target'));
    render(<App />, document.getElementById('render-target'));
});