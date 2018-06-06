var pubJson = require('../mocks/pubs.json');
import {Pub} from "../entites/pubs.js";
var moment = require('moment');

export function listerPubs() {
  var listePub = [];
 pubJson.forEach(pub => {
  listePub.push(new Pub(pub.name, pub.owner.firstName, pub.owner.lastName, pub.owner.mail,
    pub.openDays, pub.openHours.start, pub.openHours.end, pub.beers));
 })
  return listePub ;
}

export function listerPubsOuverts() {
  var listeJourOuverts = [];
  pubJson.forEach(pub => {
    if(pub['openDays'].includes(moment().format('dddd')))
    listeJourOuverts.push((new Pub(pub.name, pub.owner.firstName, pub.owner.lastName, pub.owner.mail,
      pub.openDays, pub.openHours.start, pub.openHours.end, pub.beers)));
  });
  return listeJourOuverts;
}

