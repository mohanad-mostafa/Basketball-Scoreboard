let homeScore = document.getElementsByClassName("home-score-text")
let guestScore = document.getElementsByClassName("guest-score-text")
let count = 0

function add1Home() {
    count = count + 1
    console.log(count)
    let countStr = count + ""
    homeScore.textContent = countStr 
    console.log(homeScore.textContent)
}

function add2Home() {
    count = count + 2
    homeScore.textContent = count
}

function add3Home() {
    count += 3
    homeScore.textContent = count
}

function add1Guest() {
    count++
    guestScore.textContent = count
}

function add2Guest() {
    count += 2
    guestScore.textContent = count
}

function add3Guest() {
    count += 3
    guestScore.textContent = count
}