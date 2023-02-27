import characterData from './data.js'
import Character from './Character.js'

/*
CHALLENGE
1. Inside attack(), check if either character is dead.
If they are, call a new function called endGame().
2. Set up the new function endGame() and have it 
log out "the game is over".
*/

function attack() {
    wizard.getDiceHtml()
    orc.getDiceHtml()
    wizard.takeDamage(orc.currentDiceScore)
    orc.takeDamage(wizard.currentDiceScore)
    render()
    if(wizard.dead || orc.dead){
        endGame()
    }
}

function endGame(){
    console.log('The game is over')
}




document.getElementById("attack-button").addEventListener('click', attack)

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
    document.getElementById('monster').innerHTML = orc.getCharacterHtml()
}

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)
render()