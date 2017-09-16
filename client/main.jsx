import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { FlowRouter } from 'meteor/kadira:flow-router';

import '../imports/startup/client/routes.jsx';
import Home from '../imports/ui/Home.jsx';
import Navbar from '../imports/ui/Navbar.jsx';
import Map from '../imports/ui/Map.jsx';
import Main from '../imports/ui/Main.jsx';
import Landing from '../imports/ui/landingpg.jsx'



Meteor.startup(() => {
    render(<Landing />, document.getElementById('landing-target'));
});
