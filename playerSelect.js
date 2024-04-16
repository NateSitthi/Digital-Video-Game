
let playerCount = 0;
let roundsTotal = 0;
let roundsPlayed = 0;
let colors = ["Red", "Blue", "Cyan", "Pink", "Brown", "Green", "Black", "Gold"];
let combination = [];
let randComb = colors[Math.floor(Math.random() * colors.length)];



function onePlayer() {
    document.getElementById("1Player");
    playerCount = 1;
    console.log(playerCount);
    let slider = document.getElementById("myRange");
    slider = slider.style.display = "none";
}
// function twoPlayer() {
//     document.getElementById("2Player");
//     playerCount = 2;
//     console.log(playerCount);
//     let slider = document.getElementById("myRange");
//     slider = slider.style.display = "block"; // shows slider
// }
function ready() {
    // console.log(combination.length);
    if (playerCount == 1) {
        while (combination.length < 4) {
            let randComb = colors[Math.floor(Math.random() * colors.length)];
            combination.push(randComb);
            console.log(combination);
        }
    }
}
// im punching something 
