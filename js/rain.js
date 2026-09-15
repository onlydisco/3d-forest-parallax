const canvas = document.querySelector(".rain");
if (!canvas) throw new Error("Canvas element with class 'rain' not found");

const c = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const rainPower = prefersReducedMotion ? 0 : 500;
const rainArray = [];

for (let i = 0; i < rainPower; i++) {
  const rainXLocation = Math.floor(Math.random() * window.innerWidth) + 1;
  const rainYLocation = Math.random() * -500;
  const randomRainHeight = randomNum(2, 8);
  const randomSpeed = randomNum(0.2, 20);
  const randomOpacity = Math.random() * 0.55;
  rainArray.push({
    x: rainXLocation,
    y: rainYLocation,
    endy: randomRainHeight,
    velocity: randomSpeed,
    opacity: randomOpacity,
  });
}

function animateRain() {
  requestAnimationFrame(animateRain);
  c.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < rainArray.length; i++) {
    const drop = rainArray[i];
    const rainEnd = canvas.height + 100;

    if (drop.y >= rainEnd) {
      drop.y = drop.endy - 100;
    } else {
      drop.y += drop.velocity;
    }

    c.beginPath();
    c.moveTo(drop.x, drop.y);
    c.lineTo(drop.x, drop.y - drop.endy);
    c.lineWidth = 2;
    c.strokeStyle = "rgba(255, 255, 255, " + drop.opacity + ")";
    c.stroke();
  }
}

if (rainArray.length > 0) {
  animateRain();
}
