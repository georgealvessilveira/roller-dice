const diceTypeInput = document.getElementById("dice-type");
const rollDiceButton = document.getElementById("roll-dice");

rollDiceButton.onclick = function() {
    console.log(diceTypeInput.value);
}