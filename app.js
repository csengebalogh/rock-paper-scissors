const decisionDiv = document.querySelector('.decision')
const decisionDisplay = document.querySelector('#decisionDisplay')
const options = document.querySelectorAll('.option')
const opts = Array.from(options)

decisionDisplay.style.display = 'none'


for (var i=0;i<options.length;i++) {
    opts[i].addEventListener('click', decisionMade)
}

function decisionMade () {
    console.log('decision made')
    console.log(opts)
    decisionDiv.style.display = 'none'
    decisionDisplay.style.display = 'block'
}

console.log(options) // NodeList
console.log(opts) // List


