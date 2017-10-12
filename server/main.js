import { Meteor } from 'meteor/meteor';
import { Events } from '../imports/api/events.js';

Meteor.startup(() => {
  // code to run on server at startup
});

// prints result of api call to local terminal, using wikipedia as example
//console.log(HTTP.call('GET', 'http://eventregistry.org/json/article?query=%7B%22%24query%22%3A%7B%22%24and%22%3A%5B%7B%22sourceUri%22%3A%7B%22%24and%22%3A%5B%22abc.net.au%22%5D%7D%7D%2C%7B%22keyword%22%3A%7B%22%24and%22%3A%5B%22hurricane%22%2C%22irma%22%5D%7D%7D%2C%7B%22lang%22%3A%22eng%22%7D%5D%7D%7D&action=getArticles&resultType=articles&articlesSortBy=date&articlesCount=20&callback=JSON_CALLBACK'));

/*Meteor.publish('events', function(){
    console.log("publish events");
    return Events.find();
});*/

/*Meteor.publish('getNews', function(topic){
    console.log(HTTP.call('GET', 'http://eventregistry.org/json/article?query=%7B%22%24query%22%3A%7B%22%24and%22%3A%5B%7B%22sourceUri%22%3A%7B%22%24and%22%3A%5B%22abc.net.au%22%5D%7D%7D%2C%7B%22keyword%22%3A%7B%22%24and%22%3A%5B%22hurricane%22%2C%22irma%22%5D%7D%7D%2C%7B%22lang%22%3A%22eng%22%7D%5D%7D%7D&action=getArticles&resultType=articles&articlesSortBy=date&articlesCount=20&callback=JSON_CALLBACK'));

    request = require('request');
    topic = ['hurricane','irma'];
    request.get({
        url: "http://eventregistry.org/json/article&callback=JSON_CALLBACK",
        qs: "{'query': {'$query': {'$and': [{'sourceUri': {'$and': ['abc.net.au', 'bbc.co.uk', 'theaustralian.com.au']}},{'keyword': {'$and': " + topic + "}}, {}]}, 'action': 'getArticles', 'resultType': 'articles', 'articlesSortBy': 'date', 'articlesCount': 20}"
    }, function(error, response, body) {
        body = JSON.parse(body);
        console.log(body);
    });
        
});*/
