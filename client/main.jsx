import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import '../imports/startup/client/routes.js';
import Home from '../imports/ui/Home.jsx';
import Navbar from '../imports/ui/Navbar.jsx';

Meteor.startup(() => {
    render(<Navbar />, document.getElementById('navbar-target'));
    render(<Home />, document.getElementById('home-target'));
});
