import {listerPubsOuverts} from "./services/pubs-services.js";
import styles from './app.css'

function afficherListePubsOuverts() {
    listerPubsOuverts().forEach(pub => {
        let element = document.createElement("LI");
        let texte = document.createTextNode("Le pub " + pub.name + " appartient à " + pub.firstName + " " + pub.lastName + " et il est ouvert aujourd'hui");
        element.appendChild(texte);
        document.getElementById("liste").appendChild(element);
       })
}
      afficherListePubsOuverts();
