import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { FlowRouter } from 'meteor/kadira:flow-router';

import Index from '../imports/ui/Index.jsx';


Meteor.startup(() => {
    render(<Index />, document.getElementById('index-target'));
});
