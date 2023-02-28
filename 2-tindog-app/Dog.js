class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getDogHtml() {
    const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this;
    document.querySelector(".dog-image").style.backgroundImage=`url(${avatar})`
    return `
        <div class="badges">
           
          </div>

      <div class="image-text">
        <h3 class="dog-name">${name}, ${age} </h3>
        <h4 class="dog-info">${bio}</h4>
      </div>
    </div>`;
  }
}

export default Dog;
