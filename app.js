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
}

function decisionMade (e) {
    cl(e.target.id)
    userDecision.textContent = e.target.id
    console.log('decision made')
    console.log(opts)
    userDiv.style.display = 'none'
    decisionDisplay.style.display = 'block'

    botDecides()
}

for (var i=0;i<options.length;i++) {
    opts[i].addEventListener('click', decisionMade)
}

console.log(options) // NodeList
console.log(opts) // List

cl(botDecision)
