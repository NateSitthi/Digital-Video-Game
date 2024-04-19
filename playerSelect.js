document.addEventListener("DOMContentLoaded", (event) => {
    console.log('loaded')
})
let colors = [
    'Red', 'Blue', 'Cyan', 'Pink', 'Brown', 'Green', 'Black', 'Gold'
]
let combination = [];
let userComb = [];
let S1 = document.getElementById("S1"),S2 = document.getElementById("S2"),S3 = document.getElementById("S3"),S4 = document.getElementById("S4")
let userGuess = 8;
let randComb = colors[Math.floor(Math.random() * colors.length)];
let guess = 8;
let win = false
let list = document.getElementById

function ready() {
    conButton = document.getElementById('confirm');
    // conButton.style.display ='none';
    while (combination.length < 4) {
        let randComb = colors[Math.floor(Math.random() * colors.length)];
        combination.push(randComb);
        console.log(combination);
    }

}
function updateUserlist(color) {
    userComb.push(color);
    console.log(userComb);
    console.log(color);
    document.getElementById("S1").classList=" "
    document.getElementById("S1").classList.add("dot",color)
}
function game() {
    ready();
    console.log("User Combination:", userComb);
    console.log("CPU Combination:", combination);
    if (userComb === guess) {
        console.log("testing1")
        if (randComb === userComb) {
            // for (let i = 0; i < array.length; i++) {
            //     if (randComb[i] === userComb[i]) {
            //         win = true;
            //         console.log("this works")
            //     }
            // }
        }
    }
}



