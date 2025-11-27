const display = document.getElementById("time");
const startBtn = document.getElementById("butt1");
const stopBtn = document.getElementById("butt2");
const resetBtn = document.getElementById("butt3");

let hourTime = 0;
let minTime = 0;
let secTime = 0;
let doilTime = 0;
let interval;

function disp() {
  let hour = hourTime < 10 ? "0" + hourTime : hourTime;
  let min = minTime < 10 ? "0" + minTime : minTime;
  let sec = secTime < 10 ? "0" + secTime : secTime;
  let doil = doilTime < 10 ? "0" + doilTime : doilTime;
  display.innerText = `${hour}:${min}:${sec}:${doil}`;
}
startBtn.onclick = function () {
  interval = setInterval(() => {
    doilTime++;
    if (doilTime === 100) {
      doilTime = 0;
      secTime++;
    }
    if (secTime === 60) {
      secTime = 0;
      minTime++;
    }
    if (minTime === 60) {
      minTime = 0;
      hourTime++;
    }
    disp();
  }, 10);
  this.style()
};
stopBtn.onclick = function () {
  clearInterval(interval);
};
resetBtn.onclick = function () {
  hourTime = 0;
  minTime = 0;
  secTime = 0;
  doilTime = 0;
  clearInterval(interval);
  disp();
};
