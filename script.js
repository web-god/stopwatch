let ms = document.getElementById("ms");
const second = document.getElementById("second");
const minute = document.getElementById("minute");
const hour = document.getElementById("hour");
let count = 0;
let sec = 0;
let min = 0;
let hr = 0;
let timer = false;

function start() {
  timer = true;
  stopwatch();
}

function stop() {
  timer = false;
  let count = 0;
}

function reset() {
  timer = false;
   count = 0;
   sec = 0;
   min = 0;
   hr = 0;

  ms.innerHTML = "00";
  second.innerHTML = "00";
  minute.innerHTML = "00";
  hour.innerHTML = "00";
}

function stopwatch() {
  if (timer == true) {
    count++;
    if (count == 100) {
      sec++;
      count = 0;
    }

    if (sec == 60) {
      min++;
      sec = 0;
    }

    if (min == 60) {
      hour++;
      min = 0;
    }

    let msString = count;
    let secString = sec;
    let minString = min;
    let hrString = hr;

    if (count < 10) {
      msString = "0" + count;
    }
    if (sec < 10) {
      secString = "0" + sec;
    }
    if (min < 10) {
      minString = "0" + min;
    }
    if (hr < 10) {
      hrString = "0" + hr;
    }

    ms.innerHTML = msString;
    second.innerHTML = secString;
    minute.innerHTML = minString;
    hour.innerHTML = hrString;

    setTimeout(stopwatch,7);
  }
}
