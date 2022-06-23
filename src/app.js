const cl = console.log
const userDiv = document.querySelector('.user')
const h2 = document.querySelector('#h2')
const resetDiv = document.querySelector('.resetDiv')
const resetButton = document.querySelector('#resetButton')
const resultDisplay = document.querySelector('#result')
const userDecision = document.getElementById('userDecision')
const decisionDisplay = document.querySelector('#decisionDisplay')
const botDecisionDiv = document.querySelector('#botDecision')
const options = document.querySelectorAll('.option')
const opts = Array.from(options)
const botOptions = ["Rock", "Paper", "Scissors"]

decisionDisplay.style.display = 'none'
resetDiv.style.display = 'none'
botDecision.style.display = 'none'

resetButton.addEventListener("click", function(){
    resetDiv.style.display = 'none'
    userDiv.style.display = 'block'
    decisionDisplay.style.display = 'none'
    resultDisplay.textContent = 'Result'
    // h2.style.display = 'block'
    botDecisionDiv.style.display = 'none'
})


function botDecides () {
    var botDecision = botOptions[
        Math.floor(
            Math.random() * botOptions.length
        )
    ]

    botDecisionDiv.style.display = 'block'
    botDecisionDiv.textContent = botDecision

    return botDecision
}

function decisionMade (e) {

    let userPick = e.target.id
    userDecision.textContent = userPick

    userDiv.style.display = 'none'
    decisionDisplay.style.display = 'block'
    resetDiv.style.display = 'block'
    // h2.style.display = 'none'
    // h2.textContent = "Play Again"


    let botPick = botDecides()

    if (userPick == botPick) {
        resultDisplay.textContent = "DRAW"
    } else if (
        userPick == "Rock" && botPick == "Scissors" ||
        userPick == "Paper" && botPick == "Rock" ||
        userPick == "Scissors" && botPick == "Paper"
    ) {
        resultDisplay.textContent = "YOU WON"
    } else {
        resultDisplay.textContent = "COMPUTER WON"
    }

}

for (var i=0;i<options.length;i++) {
    opts[i].addEventListener('click', decisionMade)
}
