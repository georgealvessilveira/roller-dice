const diceTypeInput = document.getElementById("dice-type");
const rollDiceButton = document.getElementById("roll-dice");
const result = document.getElementById("result");

rollDiceButton.onclick = function() {
    const diceResult = parseInt((Math.random() * diceTypeInput.value) + 1);
    result.textContent = diceResult;
}