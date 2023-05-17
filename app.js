const ROCK_BUTTON = document.getElementById("rock") // 0
const PAPER_BUTTON = document.getElementById("paper") // 1
const SCISSORS_BUTTON = document.getElementById("scissors") //2

const PICK_BUTTONS = document.getElementsByClassName("pick")

const INDICATOR = document.getElementById('loading')
const RESULT_FIELD = document.getElementById("resultField")
const TABLE = document.getElementById('table')

const RESET_BUTTON = document.getElementById('reset')

const obj = {
    0: 'rock',
    1: 'paper',
    2: 'scissors'
}

var roundId = 0

// RPS_TABLE[row][col]
const RPS_TABLE = [

    [null, true, false],
    [false, null, true],
    [true, false, null]
];

function userPicked(userPick, event) {
    event.preventDefault()
    roundId++
    var botPick = computerPicks()
    var decision = makeDecision(userPick, botPick) //bool

    console.log(decision);

    let result, status

    switch (decision) {
        case false:
            result = "User wins!"
            status = 0
            break;
        case true:
            result = "Bot wins!"
            status = 1
            break;
        default: //null
            result = "Tie"
            status = 2
            break;
    }
    loading()

    setTimeout(() => {
        displayResult(result), 1000
        storeResults(status, userPick, botPick)
    }, 1000)
}

function computerPicks() {
    return Math.floor(Math.random() * 3);
}

function makeDecision(user, bot) {    
    return RPS_TABLE[user][bot]
}

function loading() {
    INDICATOR.removeAttribute('hidden')
    RESULT_FIELD.setAttribute('hidden', 'true')
}

function displayResult(r) {
    INDICATOR.setAttribute('hidden', 'true')
    RESULT_FIELD.removeAttribute('hidden')
    RESULT_FIELD.value = r
}

function storeResults(status, user, bot) {

    let row = document.createElement('tr')
    let idTd = document.createElement('td')
    let userTd = document.createElement('td')
    let botTd = document.createElement('td')
    let bg = ''

    idTd.innerHTML = roundId.toString()
    userTd.innerHTML = Object.values(obj)[user]
    botTd.innerHTML = Object.values(obj)[bot]

    switch (status) {
        case 0:
            bg = 'bg-success'
            break;
        case 1:
            bg = 'bg-danger'
            break;
        default:
            bg = 'bg-light'
            break;
    }

    row.classList.add(bg)
    row.appendChild(idTd)
    row.appendChild(userTd)
    row.appendChild(botTd)
    TABLE.appendChild(row)
}

function reset() {
    roundId = 0
    document.querySelectorAll('td').forEach(element => element.remove());
}

ROCK_BUTTON.addEventListener("click", (e) => userPicked(0, e))
PAPER_BUTTON.addEventListener("click", (e) => userPicked(1, e))
SCISSORS_BUTTON.addEventListener("click", (e) => userPicked(2, e))
RESET_BUTTON.addEventListener("click", reset)