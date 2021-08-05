{

let amsterdamClock = document.getElementById("amsterdamClock");    
let newYorkClock = document.getElementById("newYorkClock");
let sindeyClock = document.getElementById("sidneyClock");

let amsterdamTime = {};
let newYorkTime = {};
let sidneyTime = {};

(function () {
    timeInit();
    displayTime();    
})();

function timeInit(){
    
    let currentMachineTime = new Date();
    
    // huidige machine tijd.
    amsterdamTime.seconds = currentMachineTime.getSeconds();
    amsterdamTime.minutes = currentMachineTime.getMinutes();
    amsterdamTime.hours = currentMachineTime.getHours();

    // -6 uur vergeleken met NL.
    newYorkTime.seconds = currentMachineTime.getSeconds();
    newYorkTime.minutes = currentMachineTime.getMinutes();
    
    let newYorkHour = currentMachineTime.getHours() - 6;

    if (newYorkHour < 0) {
        newYorkHour += 24;
    }
    newYorkTime.hours = newYorkHour;

    // +10 uur vergeleken met NL.
    sidneyTime.seconds = currentMachineTime.getSeconds();
    sidneyTime.minutes = currentMachineTime.getMinutes();

    let sidneyHour = currentMachineTime.getHours() + 10;
    if(sidneyHour > 24) {
        sidneyHour -= 24;
    }
    sidneyTime.hours = sidneyHour;
}

function displayTime() {
    timeInit();
        amsterdamClock.innerHTML = `${amsterdamTime.hours}.${amsterdamTime.minutes}.${amsterdamTime.seconds}`;
        newYorkClock.innerHTML = `${newYorkTime.hours}.${newYorkTime.minutes}.${newYorkTime.seconds}`;
        sindeyClock.innerHTML = `${sidneyTime.hours}.${sidneyTime.minutes}.${sidneyTime.seconds}`;
    setTimeout(updateTime, 100);
}

function updateTime() {
    displayTime();
}

}
