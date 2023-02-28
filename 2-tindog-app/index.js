import dogs from './data.js'
import Dog from './Dog.js'

let dogsArray = ["Rex", "Bella", "Teddy"]
let isWaiting = false

function getNewDogs() {
    const nextDogData = dogs[dogsArray.shift()]
    return nextDogData ? new Dog(nextDogData) : {}
}
function crossedDog(){
    document.querySelector(".badges").innerHTML = `<img src="./images/badge-nope.png" class="badge-nope" />`
}

function likedDog(){
    document.querySelector(".badges").innerHTML = `<img src="./images/badge-like.png" class="badge-like" />`
}




document.querySelector(".cross-icon").addEventListener("click",crossedDog)
document.querySelector(".like-icon").addEventListener("click",likedDog)
function render() {
    document.querySelector(".dog-image").innerHTML = firstDog.getDogHtml()
}

const firstDog = new Dog(dogs.Rex)
let dog = getNewDogs()
render()