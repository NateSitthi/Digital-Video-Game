
let colors = [
 'Red', 'Blue', 'Cyan','Pink', 'Brown', 'Green', 'Black', 'Gold'
]
let combination = [];
let userComb = [];
let randComb = colors[Math.floor(Math.random() * colors.length)];
let guess = 8;
let win = false


function ready() {
    conButton = document.getElementById('confirm');
    conButton.style.display ='none';
        while (combination.length < 4) {
            let randComb = colors[Math.floor(Math.random() * colors.length)];
            combination.push(randComb);
            console.log(combination);
        }

}
function updateUserlist(color) {
    userComb.push(color);
    console.log(userComb);
}
function game(){
    ready();
    console.log("User Combination:", userComb);
    console.log("CPU Combination:", combination);
}
function compare () {
    let codeCopy = randComb.slice(0);
if (randComb === userComb) {
    for (let i = 0; i < array.length; i++) {
        if (randComb[i] === userComb[i]) {
            win = true;
            console.log(win)
        }
        
    }
}
else {
    for (let j = 0; j < randComb.length; j++) {
        if (codeCopy.indexOf(guess[j]) !== -1) {
          codeCopy[codeCopy.indexOf(guess[j])] = 0;
        }
      }
}
}