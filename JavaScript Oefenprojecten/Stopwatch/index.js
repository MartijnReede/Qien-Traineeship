{

    let minute = document.getElementById("minute");
    let second = document.getElementById("second");
    let miliSecond = document.getElementById("miliSecond")
    let startButton = document.getElementById("startButton");
    let stopButton = document.getElementById("stopButton");
    let resetButton = document.getElementById("resetButton");
    let timeRunning = false;

    let min = Number(minute.textContent);
    let sec = Number(second.textContent);
    let miliSec = Number(miliSecond.textContent);

    startButton.onclick = () => {
        timeRunning = true;
        startTimer();
    }

    stopButton.onclick = () => {
        timeRunning = false;
    }

    resetButton.onclick = () => {
        minute.innerHTML = "00";
        second.innerHTML = "00";
        miliSecond.innerHTML = "00";
        min = 0;
        sec = 0;
        miliSec = 0;
    }

    //Elke 10 ms wordt de tijd geupdate. 
    function startTimer() {
        if (timeRunning) {
            setTimeout(updateMiliSeconds, 10)
        }
    }

    function updateMiliSeconds(){
        
        if (miliSec !== 100) {

            if (miliSec < 10) {
                miliSecond.innerHTML = "0" + miliSec++;
            } else {
                miliSecond.innerHTML = miliSec++;
            }
        }

        if (miliSec === 100) {
            miliSec = 0;
            miliSecond.innerHTML = "00";

            if (sec < 9) {
                second.innerHTML = "0" + ++sec;  
            } else {
                second.innerHTML = ++sec;
            }
        }

        if (sec === 60) {
            sec = 0;
            second.innerHTML = "00";

            console.log("MINUTE");
            if (min < 9) {
                
                minute.innerHTML = "0" + ++min;
            } else {
                minute.innterHTML = ++min;
            }
        }

        startTimer();
    }
}

