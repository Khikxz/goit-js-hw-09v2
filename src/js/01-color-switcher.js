const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

start.addEventListener("click", () => {
    timerId = setInterval(() => {
        const color = getRandomHexColor();
        document.body.style.backgroundColor = color;
    }, 1000);
    start.disabled = true;
});

stop.addEventListener("click", () => {
    clearInterval(timerId); 
    start.disabled = false;
});

