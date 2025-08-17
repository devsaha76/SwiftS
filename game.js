document.addEventListener("DOMContentLoaded", () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const container = document.getElementById("letters");
  const used = [];

  const COUNT = 16;
  const MIN_GAP = 6;
  const MAX_TRIES = 200;

  function getRandomX() {
    for (let tries = 0; tries < MAX_TRIES; tries++) {
      const x = Math.random() * 100;
      if (used.every(p => Math.abs(p - x) >= MIN_GAP)) {
        used.push(x);
        return x;
      }
    }
    const x = Math.random() * 100;
    used.push(x);
    return x;
  }

  for (let i = 0; i < COUNT; i++) {
    const span = document.createElement("span");
    span.className = "letter";
    span.textContent = letters[Math.floor(Math.random() * letters.length)];
    span.style.top = Math.random() * 100 + "vh";
    span.style.left = getRandomX() + "vw";
    span.style.fontSize = (15 + Math.random() * 25) + "px";
    span.style.animationDuration = (5 + Math.random() * 5) + "s";
    container.appendChild(span);
  }
});

let totalTime = 60;
let timeLeft = totalTime;

const circle = document.querySelector('.progress-ring__progress');
const radius = 50;
const circumference = 2 * Math.PI * radius;
circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = 0;

function setProgress(time) {
    const offset = circumference - (time / totalTime) * circumference;
    circle.style.strokeDashoffset = offset;
    document.getElementById('time-left').textContent = time;
}

function startTimer() {
    const timer = setInterval(() => {
        timeLeft--;
        setProgress(timeLeft);
        if (timeLeft <= 0) {
            clearInterval(timer);
        }
    }, 1000);
}

startTimer();


