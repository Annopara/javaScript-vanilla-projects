const letters = "0123456789ABCDEF";

const btn = document.getElementById("btn");
const toggle = document.getElementById("toggleButton");
const color = document.querySelector(".color");
const dBody = document.querySelector("body");

// Random color function
function getHEXColors() {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += letters[getRandomNum()];
  }

  dBody.style.backgroundColor = hexColor;
  color.textContent = hexColor;
}
function getRandomNum() {
  return Math.floor(Math.random() * letters.length);
}

// Toggle function

let toggleFlip = true;

function toggleAutomaticFlip() {
  toggleFlip = autoFlip();
}

function autoFlip() {
  if (toggleFlip) {
    getHEXColors();
    setTimeout(autoFlip, 2000);
  }
}

function timeOutColorFlip() {
  const delay = prompt("Enter delay time (miliseconds)");

  if (!isNaN(delay)) {
    setTimeout(getHEXColors, delay);
  } else {
    alert("Invalid time!");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  btn.addEventListener("click", timeOutColorFlip);
  toggle.addEventListener("click", toggleAutomaticFlip);

  autoFlip();
});
