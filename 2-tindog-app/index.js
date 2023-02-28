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
    if (dogsArray.length>0){
        nextRender()

    }else{
        endMessage()
    }

}

function likedDog(){
    document.querySelector(".badges").innerHTML = `<img src="./images/badge-like.png" class="badge-like" />`
    if (dogsArray.length>0){
        nextRender()

    }else{
        endMessage()
    }

}

function endMessage(){
    document.querySelector(".cross-icon").style.display="none"
    document.querySelector(".like-icon").style.display="none"

    document.querySelector(".image-content").innerHTML = `<h3 class="endMessage">There are no dogs! 🐶</h3>`

}


document.querySelector(".cross-icon").addEventListener("click",crossedDog)
document.querySelector(".like-icon").addEventListener("click",likedDog)
function render() {
    document.querySelector(".dog-image").innerHTML = firstDog.getDogHtml()
}
function nextRender(){
    let dog = getNewDogs()
    document.querySelector(".dog-image").innerHTML = dog.getDogHtml()

}

const firstDog = new Dog(dogs.Rex)
render()