let isStopWatchRunning = false;
let starting;
let hours;
let minutes;
let seconds;

let managingStopWatchDisplay = () => {
    hours = 0;
    minutes = 0;
    seconds = 0;

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    document.querySelector("#hours").innerHTML = `${hours} :`;
    document.querySelector("#minutes").innerHTML = minutes;
    document.querySelector("#seconds").innerHTML = seconds;
}

managingStopWatchDisplay();


let startStopWatch = () => {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        minutes = (minutes < 10 ? "0" : "") + minutes;
    }
    if (minutes == 60) {
        minutes = 0;
        hours++;
        hours = (hours < 10 ? "0" : "") + hours;
    }
    seconds = (seconds < 10 ? "0" : "") + seconds;

    document.querySelector("#seconds").innerHTML = seconds;
    document.querySelector("#minutes").innerHTML = minutes;
    document.querySelector("#hours").innerHTML = `${hours} :`;
}

let start = () => {
    if (isStopWatchRunning == false) {
        starting = setInterval(startStopWatch, 1000);
        isStopWatchRunning = true;
    }
}

let stop = () => {
    clearInterval(starting);
    isStopWatchRunning = false;
}

let reset = () => {
    stop();
    managingStopWatchDisplay();
}