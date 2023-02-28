import dogs from "./data.js";
import Dog from "./Dog.js";

let dogsArray = ["Bella", "Teddy"];
let isWaiting = false;

function getNewDogs() {
  const nextDogData = dogs[dogsArray.shift()];
  return nextDogData ? new Dog(nextDogData) : {};
}
function crossedDog() {
  if (dogsArray.length > 0) {
    document.querySelector(
      ".badges"
    ).innerHTML = `<img src="./images/badge-nope.png" class="badge-nope" />`;

    setTimeout(nextRender, 1000);
  } else {
    document.querySelector(
      ".badges"
    ).innerHTML = `<img src="./images/badge-nope.png" class="badge-nope" />`;
    setTimeout(endMessage, 1000);
  }
}

function likedDog() {
  if (dogsArray.length > 0) {
    document.querySelector(
      ".badges"
    ).innerHTML = `<img src="./images/badge-like.png" class="badge-like" />`;
    document.querySelector(".cross-icon").classList.add("display")
    document.querySelector(".like-icon").classList.add("display")
    setTimeout(nextRender, 1000);
  } else {
    document.querySelector(
      ".badges"
    ).innerHTML = `<img src="./images/badge-like.png" class="badge-like" />`;
    document.querySelector(".cross-icon").classList.add("display")
    document.querySelector(".like-icon").classList.add("display")
    
    setTimeout(endMessage, 1000);
  }
}

function endMessage() {
  document.querySelector(".cross-icon").style.display = "none";
  document.querySelector(".like-icon").style.display = "none";

  document.querySelector(
    ".image-content"
  ).innerHTML = `<h3 class="endMessage">There are no dogs! 🐶</h3>`;
}

document.querySelector(".cross-icon").addEventListener("click", crossedDog);
document.querySelector(".like-icon").addEventListener("click", likedDog);
function render() {
  document.querySelector(".dog-image").innerHTML = firstDog.getDogHtml();
}
function nextRender() {
    document.querySelector(".cross-icon").classList.remove("display")
    document.querySelector(".like-icon").classList.remove("display")
  let dog = getNewDogs();
  document.querySelector(".dog-image").innerHTML = dog.getDogHtml();
}

const firstDog = new Dog(dogs.Rex);
render();
