{

    let card1 = document.getElementById("card-1");
    let card2 = document.getElementById("card-2");
    let card3 = document.getElementById("card-3");
    let card4 = document.getElementById("card-4");
    let card5 = document.getElementById("card-5");
    let card6 = document.getElementById("card-6");

    let playButton1 = document.getElementById("play-button-1");
    let playButton2 = document.getElementById("play-button-2");
    let playButton3 = document.getElementById("play-button-3");
    let playButton4 = document.getElementById("play-button-4");
    let playButton5 = document.getElementById("play-button-5");
    let playButton6 = document.getElementById("play-button-6");

    card1.onmouseenter = displayPlayButtonFunc;
    card1.onmouseleave = hidePlayButtonFunc;
    card2.onmouseenter = displayPlayButtonFunc;
    card2.onmouseleave = hidePlayButtonFunc;
    card3.onmouseenter = displayPlayButtonFunc;
    card3.onmouseleave = hidePlayButtonFunc;
    card4.onmouseenter = displayPlayButtonFunc;
    card4.onmouseleave = hidePlayButtonFunc;
    card5.onmouseenter = displayPlayButtonFunc;
    card5.onmouseleave = hidePlayButtonFunc;
    card6.onmouseenter = displayPlayButtonFunc;
    card6.onmouseleave = hidePlayButtonFunc;

    let currentCard;

    function displayPlayButtonFunc() {
        let cardNr = this.getAttribute("cardnr");
        currentCard = cardNr;

        switch (cardNr) {
            case "1":
                playButton1.style.visibility = "visible";
                break;
            case "2":
                playButton2.style.visibility = "visible";
                break;
            case "3":
                playButton3.style.visibility = "visible";
                break;
            case "4":
                playButton4.style.visibility = "visible";
                playButton4.style.marginLeft = "65px";
                break;
            case "5":
                playButton5.style.visibility = "visible";
                break;
            case "6":
                playButton6.style.visibility = "visible";
                break;
        }
    }

    function hidePlayButtonFunc() {

        switch (currentCard) {
            case "1":
                playButton1.style.visibility = "hidden";
                break;
            case "2":
                playButton2.style.visibility = "hidden";
                break;
            case "3":
                playButton3.style.visibility = "hidden";
                break;
            case "4":
                playButton4.style.visibility = "hidden";
                break;
            case "5":
                playButton5.style.visibility = "hidden";
                break;
            case "6":
                playButton6.style.visibility = "hidden";
                break;
        }
    }


}