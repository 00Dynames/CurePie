import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import { render } from 'react-dom';

import Home from '../../ui/Home.jsx';
import Navbar from '../../ui/Navbar.jsx';
import Map from '../../ui/Map.jsx';
import Landing from '../../ui/landingpg.jsx'

FlowRouter.route("/", {
    name: "Home",
    action(){
        console.log("HELP");
    }
});

FlowRouter.route("/map", {
    name: "Map View",
    action(){
        mount(Map, {main: <Map />});
    }
});
