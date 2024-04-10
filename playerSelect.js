var playerCount = 0;
let roundsTotal = 0;
let roundsPlayed = 0;

function onePlayer() {
    document.getElementById("1Player")
    playerCount = 1;
    console.log(playerCount)
    let slider = document.getElementById("myRange")
    slider = slider.style.display = "none";
}
function twoPlayer() {
    document.getElementById("2Player")
    playerCount = 2;
    console.log(playerCount)
    let slider = document.getElementById("myRange")
    slider = slider.style.display = "block";
}
