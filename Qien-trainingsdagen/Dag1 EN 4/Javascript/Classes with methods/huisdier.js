class Huisdier {
    constructor(dier, leeftijd, geluid){
        this.dier = dier;
        this.leeftijd = leeftijd;
        this.geluid = geluid;
    }

    spreken(){
        console.log(this.geluid);
    }

    get activiteit(){
        const today = new Date();
        const hour = today.getHours();

        if (hour > 8 && hour <= 20){
            return "spelen";
        } else {
            return "slapen";
        }
    }


}

