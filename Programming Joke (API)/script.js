const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");
const jokeShare = document.getElementById("shareJoke");

// Joke generator function with XMLHttpRequest
const generateProgrammingJoke = () => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://v2.jokeapi.dev/joke/Programming?type=single");

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        const joke = JSON.parse(this.responseText);
        jokeElement.innerHTML = joke.joke;
      } else {
        jokeElement.innerHTML = "Error - Not funny";
      }
    }
  };

  xhr.send();
};

// Share joke function
const shareJoke = () => {
  const jokeText = jokeElement.innerHTML;

  setTimeout(() => {
    if (window.isSecureContext) {
      if (navigator.share) {
        navigator
          .share({
            title: "Programming Joke",
            text: jokeText,
          })
          .then(() => {
            jokeElement.innerHTML = "Joke shared successfully";
            setTimeout(() => 4000);
          })
          .catch((error) => (jokeElement.innerHTML = "Error sharing joke"));
      } else {
        jokeElement.innerHTML = "Web Share API not supported.";
      }
    }
  }, 1000);
};

jokeBtn.addEventListener("click", generateProgrammingJoke);
document.addEventListener("DOMContentLoaded", generateProgrammingJoke);
jokeShare.addEventListener("click", shareJoke);
