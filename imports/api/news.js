import { Meteor } from 'meteor/meteor';

//if (Meteor.isServer){
    
//Meteor.methods({
//    getNews(){
//        console.log("GET THE NEWS ONEGAISHIMASU");
//    }
//});
    
    /*Meteor.publish('getNews', function getNews(topic){

        request = require('request');
        topic = ['hurricane','irma'];
        result = request.get({
                    url: "http://eventregistry.org/json/article&callback=JSON_CALLBACK",
                    qs: "{'query': {'$query': {'$and': [{'sourceUri': {'$and': ['abc.net.au', 'bbc.co.uk', 'theaustralian.com.au']}},{'keyword': {'$and': " + topic + "}}, {}]}, 'action': 'getArticles', 'resultType': 'articles', 'articlesSortBy': 'date', 'articlesCount': 20}"
                }, function(error, response, body) {
                            body = JSON.parse(body);
                            console.log(body);
                });
        return result;      
    });*/
//}
