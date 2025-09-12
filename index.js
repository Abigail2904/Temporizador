let timeLeft = 60;
let timer= -10;
const countdownEl = document.getElementById("countdown");
const startBtn = document.getElementById("startBtn");
const balloonsContainer = document.getElementById("balloons-container");

function showBalloons() {
  balloonsContainer.innerHTML = "";
  for (let i = 0; i < 15; i++) {
    const balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.left = Math.random() * 90 + "%";
    balloon.style.background = `hsl(${Math.random()*360}, 80%, 60%)`;
    balloon.style.animationDuration = (3 + Math.random() * 2) + "s";
    balloonsContainer.appendChild(balloon);
  }
}

function clearBalloons() {
  balloonsContainer.innerHTML = "";
}

startBtn.addEventListener("click", () => {
  clearInterval(timer);
  timeLeft = 60;
  countdownEl.textContent = timeLeft;
  clearBalloons();

  timer = setInterval(() => {
    timeLeft:--;
    countdownEl.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      countdownEl.textContent = "¡Tiempo!";
      showBalloons();
    }
  }, 1000);

});
