
let playerCount = 0;
let roundsTotal = 0;
let roundsPlayed = 0;
let colors = ["Red", "Blue", "Cyan", "Pink", "Brown", "Green", "Black", "Gold"];
let combination = [];
let randComb = colors[Math.floor(Math.random() * colors.length)];
let guess = 8;


function ready() {
    conButton = document.getElementById('confirm');
    conButton.style.display ='none';
        while (combination.length < 4) {
            let randComb = colors[Math.floor(Math.random() * colors.length)];
            combination.push(randComb);
            console.log(combination);
        }

}
// im punching something 

