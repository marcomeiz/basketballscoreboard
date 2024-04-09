//Tablero de Home

let hScore = 0
let homeScore = document.getElementById("home-score")

function hplus1(){
    hScore += 1
    homeScore.textContent = hScore
 }
function hplus2(){
    hScore += 2
    homeScore.textContent = hScore
 }
function hplus3(){
    hScore += 3
    homeScore.textContent = hScore
 }
 
 //Tablero de Guest
 
let gScore = 0
let guestScore = document.getElementById("guest-score")

function gplus1(){
    gScore += 1
    guestScore.textContent = gScore
 }
function gplus2(){
    gScore += 2
    guestScore.textContent = gScore
 }
function gplus3(){
    gScore += 3
    guestScore.textContent = gScore
 }

function resetScore() {
    hScore = 0
    gScore = 0
    guestScore.textContent = gScore
    homeScore.textContent = hScore
 }