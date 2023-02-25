function getDiceRollArray(diceCount) {
   return new Array(diceCount).fill(0).map(function(){
       return Math.floor(Math.random() * 6) + 1
   })    
}

function getDiceHtml(diceCount) {
   return getDiceRollArray(diceCount).map(function(num){ 
       return  `<div class="dice">${num}</div>`
   }).join('')
}

const hero = {
   elementId: "hero",
   name: "Wizard",
   avatar: "images/wizard.png",
   health: 60,
   diceCount: 3
}

const monster = {
   elementId: "monster",
   name: "Orc",
   avatar: "images/orc.png",
   health: 10,
   diceCount: 1
}

function renderCharacter(data) {
   const { elementId, name, avatar, health, diceCount } = data;
   const diceHtml = getDiceHtml(diceCount)

   document.getElementById(elementId).innerHTML =
       `<div class="character-card">
           <h4 class="name"> ${name} </h4>
           <img class="avatar" src="${avatar}" />
           <div class="health">health: <b> ${health} </b></div>
           <div class="dice-container">    
               ${diceHtml}
           </div>
       </div>`;
}

renderCharacter(hero);
renderCharacter(monster);
