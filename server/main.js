import { Meteor } from 'meteor/meteor';
import '../imports/api/events.js';

Meteor.startup(() => {
  // code to run on server at startup
});

// prints result of api call to local terminal, using wikipedia as example
console.log(HTTP.call('GET', 'https://en.wikipedia.org/w/api.php?action=query&titles=Hurricane_Irma&format=json'));

