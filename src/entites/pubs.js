export class Pub {
    constructor (name, firstName, lastName, mail, openDays, start, end, beers){
        this.name = name;
        this.owner(firstName, lastName, mail);
        this.openDays = openDays;
        this.openHours(start, end);
        this.beers = beers;
    }

    owner(firstName, lastName, mail) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._mail = mail;
    }

    openHours(start, end){
        this.start = start;
        this.end = end;
    }

    set name(name){
        this._name=name;
    }

    get name (){
        return this._name;
    }

    set firstName(firstName){
        this._firstName=firstName;
    }

    get firstName (){
        return this._firstName;
    }
    
    set lastName(lastName){
        this._lastName=lastName;
    }

    get lastName (){
        return this._lastName;
    }

    set openDays(openDays){
        this._openDays=openDays;
    }

    get openDays (){
        return this._openDays;
    }

    set start(start){
        this._start=start;
    }

    get start (){
        return this._start;
    }

    set end(end){
        this._end=end;
    }

    get end (){
        return this._end;
    }

    set beers(beers){
        this._beers=beers;
    }

    get beers (){
        return this._beers;
    }
}




