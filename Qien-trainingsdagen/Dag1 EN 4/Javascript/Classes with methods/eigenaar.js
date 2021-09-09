class Eigenaar {
    constructor(naam, adres){
        this.naam = naam;
        this.adres = adres;
    }

    set telefoonNr(telefoonNr){
        this._telefoonNr = telefoonNr;
    }

    get telefoonNr(){
        return this._telefoonNr;
    }
}