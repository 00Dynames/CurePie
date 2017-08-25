import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

// prints result of api call to local terminal, using wikipedia as example
console.log(HTTP.call('GET', 'https://en.wikipedia.org/w/api.php?action=query&t    itles=Main%20Page&prop=revisions&rvprop=content&format=json'));

