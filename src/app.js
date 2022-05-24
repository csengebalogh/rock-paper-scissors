const cl = console.log
const userDiv = document.querySelector('.user')
const userDecision = document.getElementById('userDecision')
const decisionDisplay = document.querySelector('#decisionDisplay')
const botDecisionDiv = document.querySelector('#botDecision')
const options = document.querySelectorAll('.option')
const opts = Array.from(options)
const botOptions = ["Rock", "Paper", "Scissors"]

decisionDisplay.style.display = 'none'

function botDecides () {
    var botDecision = botOptions[
        Math.floor(
            Math.random() * botOptions.length
        )
    ]

    botDecisionDiv.textContent = botDecision

    return botDecision
}

function decisionMade (e) {
    cl(e.target.id)

    let userPick = e.target.id
    userDecision.textContent = userPick

    userDiv.style.display = 'none'
    decisionDisplay.style.display = 'block'

    let botPick = botDecides()

    if (userPick == botPick) {
        cl("match")
    } else if (
        userPick == "Rock" && botPick == "Scissors" ||
        userPick == "Paper" && botPick == "Rock" ||
        userPick == "Scissors" && botPick == "Paper"
    ) {
        cl("you win")
    } else {
        cl("bot wins")
    }

}

for (var i=0;i<options.length;i++) {
    opts[i].addEventListener('click', decisionMade)
}
