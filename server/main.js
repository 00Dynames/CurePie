import { Meteor } from 'meteor/meteor';
import { Events } from '../imports/api/events.js';
import { HTTP } from 'meteor/http';

Meteor.startup(() => {
    // code to run on server at startup
});

Meteor.methods({
    getNews(topic){
        console.log(topic);
        console.log('https://content.guardianapis.com/search?q=' + topic + '&api-key=9f    7ca280-268f-4acc-ae47-3b88795b9e58');
        result = HTTP.call('GET', 'https://content.guardianapis.com/search?q=' + topic + '&api-key=9f7ca280-268f-4acc-ae47-3b88795b9e58');
        //console.log(result);
        return result.data.response.results;
    }
});



