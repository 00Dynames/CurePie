: QT3.14

// '$' indicates your cli prompt

How to run
==========
$ meteor

Packages
========
``` sh
meteor npm install --save react-router history
meteor npm install --save react-mounter
meteor npm install react-icons --save
meteor npm install --save google-maps-react
meteor npm install --save react-addons-pure-render-mixin
meteor add react-meteor-data
meteor npm i --save material-ui-search-bar
meteor npm install --save react-share
meteor npm install --save meteor-node-stubs
meteor npm install --save core-js
meteor npm install --save apeman-react-slideshow
meteor add session
```

API Keys
=========
GMaps -> AIzaSyDxI0mCeLq2o0YTatFKIRY2IE9n9ttuQOo

# Database setup

once you start up the app
open the mongo db console by typing 'meteor mongo' in another terminal
check that the collection 'events' exists by typing 'show collections'
it should ouput 'events'
THEN execute the commands below

``` js

db.events.insert({name: 'Chiapas Earthquake', date: '7th September 2017', location: [17.018829, -92.945795], affected: '97 confirmed', type: 'Earthquake, Magnitude 8.1', news: ['https://earthquake-report.com/2017/09/08/massive-earthquake-near-coast-of-chiapas-mexico-on-september-8-2017/', 'https://www.cnbc.com/2017/09/08/mexico-struck-by-earthquake-of-magnitude-8-tsunami-possible-usgs.html', 'https://www.theguardian.com/world/2017/sep/08/mexico-earthquake-warning-tsunami', 'https://www.nytimes.com/2017/09/08/world/americas/mexico-earthquake.html?mcubz=0'], description: 'The 2017 Chiapas earthquake struck at 23:49 CDT on 7 September (local time; 04:49 on the 8th UTC) in the Gulf of Tehuantepec off the southern coast of Mexico, near state of Chiapas, approximately 87 kilometres (54 mi) south of Pijijiapan, with a Mercalli intensity of IX (Violent). The magnitude was estimated to be Mw 8.1.', charities: [{name: 'ICF', url: 'https://donate.icfdn.org/npo/international-disaster-relief-fund', description: 'All contributions will aid in the recovery of the aftermath of the Earthquake'}, {name: 'UNICEF', url: 'https://www.unicef.org.au/donate', description: 'Creating rapid assessment teams to assess the situation of children in affected areas and provide aid'}, {name: 'GLOBAL GIVING', url: 'https://www.globalgiving.org/projects/mexico-earthquake-and-hurricane-relief-fund/', description: 'Aims to raise $1 million for recovery of areas affected'}, {name: 'CRUZ ROJA MEXICANA', url: 'https://cruzrojadonaciones.org/', description: 'Immediate disaster response'}]});

db.events.insert({name: 'Sierra Leone Mudslides', date: "14 August 2017", location: [ 8.611501, -11.796124 ], affected: '1000 affected, 500 confirmed dead', type: 'Landslide, Flooding', news: ['https://reliefweb.int/report/sierra-leone/sierra-leone-landslide-and-floods-recovery-bulletin-2-19-september-2017', 'http://www.abc.net.au/news/2017-08-28/sierra-leone-mudslides-local-leaders-say-1000-dead/8848964', 'http://www.telegraph.co.uk/news/2017/08/14/sierra-leone-landslide-hundreds-feared-buried-houses-submerged/', 'http://www.aljazeera.com/news/2017/08/sierra-leone-death-toll-landslide-nears-500-170820172022255.html'], description: "Early in the morning on August 14, 2017, after three days of torrential rainfall, devastating floods and mudslides occurred in and around Sierra Leone's capital city, Freetown. As of August 20, the number of confirmed deaths is 499; hundreds of others are missing and feared dead. More than 3,000 people were left homeless and hundreds of buildings were damaged or destroyed by the mudslides. Occurring during a particularly wet rainy season, the disaster was exacerbated by the city's situation at or below sea level, poor infrastructure, and drainage system. Local organizations and the American Red Cross handled the initial recovery efforts, and the international community has also been supplying aid", charities: [{name: 'PROJECT HOPE', url: 'http://donate.projecthope.org/site/Donation2?df_id=5669&5669.donation=form1', description: 'Creating and shipping portable medical units (“Clinic in a Can”), donating other medical supplies'}, {name: 'OXFAM', url: 'https://www.oxfam.org.au/my/donate/hunger-and-famine-threaten-millions?utm_source=appeal&utm_medium=Homepage&gclid=CjwKCAjwo4jOBRBmEiwABWNaMQ7BnHGM5V8jppBSt590fWpIEbYJCS7NWRC_rm0Yp6kDdOfKzyyyUxoCj0kQAvD_BwE', description: 'Responding to food crisis due to the mudslide'}, {name: 'GLOBAL GIVING', url: 'https://www.globalgiving.org/projects/sierra-leone-mudslide-relief-fund/', description: 'Aim to raise $500 000 to provide relief in the form of emergency supplies and longer-term recovery assistance'}, {name: 'SAVE THE CHILDREN', url: 'https://secure.savethechildren.org/site/c.8rKLIXMGIpI4E/b.9534477/k.2FB2/Sierra_Leone_Mudslide_Relief_Fund/apps/ka/sd/donor.asp', description: 'Preparing to support children that may have been separated during the natural disaster. Prioritising reuniting families and ensuring access to appropriate care'}, {name: 'ACTION AID', url: 'https://www.actionaid.org.uk/sierra-leone-mudslide-appeal', description: 'On ground recovery aid. Distributing food, water, clothing and hygiene kits with emphasis on providing assistance to girls and women who are most vulnerable during humanitarian emergencies like this one'}, {name: 'CHRISTIAN AID', url: 'https://www.christianaid.org.uk/donations/Donate/Step/1?ApproachCode=A029643', description: 'Distributing hygiene kits and packages of clothes. Immediate priority is providing food, clean drinking water, mosquito nets and household essentials'}]});

db.events.insert({name: 'Hurricane Irma', date: '30th September 2017', location: [ 27.6648, -81.515746 ], affected: '6 million people affected, 41 lost lives', type: 'Hurricane, Category 5', news: ['http://www.opusa.org/developing-hurricane-irma/', 'http://www.news.com.au/technology/environment/climate-change/shocking-pictures-show-devastation-as-hurricane-irma-rampages-across-caribbean/news-story/e9d2621246f33b6981971016ac88e07b', 'http://www.news.com.au/technology/environment/climate-change/shocking-pictures-show-devastation-as-hurricane-irma-rampages-across-caribbean/news-story/e9d2621246f33b6981971016ac88e07b', 'https://www.wired.com/story/hurricane-irma-a-practically-impossible-storm/'], description: 'Hurricane Irma was an extremely powerful and catastrophic Cape Verde type hurricane, the strongest observed in the Atlantic since Dean in 2007 in terms of maximum sustained winds. It was also the most intense Atlantic hurricane to strike the United States since Katrina in 2005, and the first major hurricane to make landfall in Florida since Wilma in 2005. The ninth named storm, fourth hurricane, and second major hurricane of the 2017 Atlantic hurricane season, Irma caused widespread and catastrophic damage throughout its long lifetime, particularly in parts of the northeastern Caribbean and the Florida Keys', charities: [{name: 'THE RED CROSS', url: 'https://www.redcross.org/donate/hurricane-irma-donations?utm_source=microussoccer-pub&utm_medium=referral&utm_campaign=irma&scode=BAG11070EY00&subcode=ussoccer-pub', description: 'On-ground volunteering efforts and providing shelter for those displaced by Irma'}, {name: 'OXFAM', url: 'https://secure2.oxfamamerica.org/page/content/emergency_hurricaneirma/', description: 'Focusing efforts on the Caribbean Islands that were devastated by Irma'}, {name: 'CONVOY OF HOPE', url: 'https://www.convoyofhope.org/donate/', description: 'Hunger-focused group sendign meals to Haiti'}, {name: 'AMERICARES', url: 'https://secure.americares.org/site/Donation2?df_id=17060&17060.donation=form1&_ga=2.182539874.577574322.1505141245-1308687355.1503858628', description: 'Nonprofit organisation focused on medicine and health, seeking to provide emergency medical supplies and other basic resources to first responders and others'}, {name: 'SOUTH FLORIDA WILDLIFE CENTER', url: 'http://www.southfloridawildlifecenter.org/how_you_can_help', description: 'Centering it’s efforts on animals affected by the storm'}]});

db.events.insert({name: 'Colombia Landslide', date: '1st April 2017', location: [ 1.152233, -76.650947 ], affected: '329 confirmed', news: ['https://www.theguardian.com/world/2017/apr/01/colombia-landslide-mocoa-putumayo-heavy-rains', 'http://www.bbc.com/news/world-latin-america-39470238', 'http://www.bbc.com/news/world-latin-america-39510721', 'http://www.abc.net.au/news/2017-04-02/colombia-landslide-leaves-more-than-100-dead/8408392', 'http://www.abc.net.au/news/2017-04-03/grim-search-resumes-in-colombia-after-deadly-flood/8409604'], description: 'The Mocoa landslide was a natural disaster that took place in 2017. During the pre-dawn hours of 1 April 2017, locally heavy rain triggered flash flooding and landslides in the city of Mocoa, Putumayo, Colombia, killing at least 329 people, injuring 332, and leaving 70 others missing. It is the third-deadliest weather-related disaster in Colombian history, and is regarded as the worst catastrophe in the history of Mocoa', charities: [{name: 'WORLD VISION', url: 'https://donate.worldvision.org/ways-to-give/disaster-relief/disaster-relief-fund', description: 'Addressing the need for clean water, hygiene and support for children’s protection, psychosocial health and return to education'}, {name: 'COLOMBIAN RED CROSS', url: 'https://www.zonapagos.com/t_cruzr/pagos.asp', description: 'sending teams of rescuers throughout the city to locate remains, rescue survivors and deliver medicine and essential supplies'}, {name: 'UNICEF LATIN AMERICA', url: 'https://www.unicef.org.co/emergencia/avalancha-putumayo'}, {name: 'MERCY CORPS', url: 'https://www.mercycorps.org/donate', description: 'Ongoing recovery efforts'}]});
```

---
