const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
  "gray",
];
const btn = document.getElementById("btn");
const toggle = document.getElementById("toggleButton");
const color = document.querySelector(".color");
const dBody = document.querySelector("body");

function keyWordColor() {
  const randomNumber = getRandomNum();
  dBody.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
}

function getRandomNum() {
  return Math.floor(Math.random() * colors.length);
}

let toggleFlip = true;

function toggleAutomaticFlip() {
  toggleFlip = autoFlip();
}

function autoFlip(params) {
  if (toggleFlip) {
    keyWordColor();
    setTimeout(autoFlip, 2000);
  }
}

function timeOutColorFlip() {
  const delay = prompt("Enter delay time (miliseconds)");
  if (!isNaN(delay)) {
    setTimeout(keyWordColor, delay);
  } else {
    alert("Invalid time!");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  btn.addEventListener("click", timeOutColorFlip);
  toggle.addEventListener("click", toggleAutomaticFlip);

  autoFlip();
});
