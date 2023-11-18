const RGB = (value) =>
  Math.min(255, Math.max(0, Math.round(value + (Math.random() - 0.5) * 20)));

const btn = document.getElementById("btn");
const toggle = document.getElementById("toggleButton");
const color = document.querySelector(".color");
const dBody = document.querySelector("body");

// Random color function
function getRGBColor() {
  const currentColor = document.body.style.backgroundColor || "#F1f5f6";
  const [r, g, b] = [255, 255, 255];

  const newColor = `rgb(${RGB(r)}, ${RGB(g)}, ${RGB(b)})`;
  return newColor;
}

function styleContent() {
  dBody.style.backgroundColor = getRGBColor();
  color.textContent = getRGBColor();
}

function getRandomNum() {
  return Math.floor(Math.random() * RGB.length);
}

let toggleFlip = true;

// Toggle function
function toggleAutomaticFlip() {
  toggleFlip = autoFlip();
}

function autoFlip() {
  if (toggleFlip) {
    styleContent();
    setTimeout(autoFlip, 2000);
  }
}

function timeOutColorFlip() {
  const delay = prompt("Enter delay time (miliseconds)");
  if (!isNaN(delay)) {
    setTimeout(getRGBColor, delay);
  } else {
    alert("Invalid time!");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  btn.addEventListener("click", timeOutColorFlip);
  toggle.addEventListener("click", toggleAutomaticFlip);

  autoFlip();
});
