let homeScore = document.getElementsByClassName("home-score-text")[0]
let guestScore = document.getElementsByClassName("guest-score-text")[0]
let countHome = 0
let countGuest = 0

function add1Home() {
    countHome = countHome + 1
    homeScore.textContent = countHome 
}

function add2Home() {
    countHome = countHome + 2
    homeScore.textContent = countHome
}

function add3Home() {
    countHome += 3
    homeScore.textContent = countHome
}

function add1Guest() {
    countGuest++
    guestScore.textContent = countGuest
}

function add2Guest() {
    countGuest += 2
    guestScore.textContent = countGuest
}

function add3Guest() {
    countGuest += 3
    guestScore.textContent = countGuest
}