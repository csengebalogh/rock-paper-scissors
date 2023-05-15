const ROCK_BUTTON = document.getElementById("rock") // 0
const PAPER_BUTTON = document.getElementById("paper") // 1
const SCISSORS_BUTTON = document.getElementById("scissors") //2

const PICK_BUTTONS = document.getElementsByClassName("pick")

const RESULT_FIELD = document.getElementById("resultField")

// RPS_TABLE[row][col]

const RPS_TABLE = [

    [null,  true,  false],
    [false, null,  true],
    [true,  false, null] 
  ];

function userPicked(userPick, event) {
    event.preventDefault()

    let decision = makeDecision(userPick, computerPicks()) //bool
    let result = ""

    switch (decision) {
        case true:
            result = "User wins!"
            break;
        case false:
            result = "Bot wins!"
            break;
        default: //null
            result = "Tie"
            break;
    }

    displayResult(result)

}

ROCK_BUTTON.addEventListener("click", (e) => userPicked(0, e))
PAPER_BUTTON.addEventListener("click", (e) => userPicked(1, e))
SCISSORS_BUTTON.addEventListener("click", (e) => userPicked(2, e))

function computerPicks() {
    return Math.floor(Math.random() * 3);
}

function makeDecision(user, bot) { 
    console.log(user, bot);
    console.log(RPS_TABLE[user][bot]);
    return RPS_TABLE[user][bot]
}

function displayResult(r) { 
    RESULT_FIELD.value = r
}