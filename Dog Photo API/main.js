//Get a dog photo from the dog.ceo api and place the photo in the DOM
const apiUrl = "https://dog.ceo/api/breeds/image/random";

const imgShow = () => {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      if (data.imageUrl) {
        imgContainer.innerHTML = `<img src="${data.imageUrl}" alt="Dog Image">`;
      }

      document.querySelector("img").src = data.message;
    })
    .catch((err) => console.log(`error: ${err}`));
};

const nextImg = () => {
  imgShow();
};

function init() {
  document.querySelector("button").addEventListener("click", nextImg);
  document.addEventListener("DOMContentLoaded", imgShow);
}

init();
