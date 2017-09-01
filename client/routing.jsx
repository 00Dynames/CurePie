import React from 'react';
import { mount } from 'react-mounter'

import { layout } from 'layout.jsx';
import Navbar from '/client/components/navbar.jsx';

FlowRouter.route("/", {
    action(){ 
        mount(layout, {
            header: <Navbar/>
        });
    }
});
