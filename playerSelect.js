document.addEventListener("DOMContentLoaded", (event) => {
    console.log('loaded')
})
let colors = [
    'Red', 'Blue', 'Cyan', 'Pink', 'Brown', 'Green', 'Black', 'Gold'
]
let combination = [];
let userComb = [];
let S1 = document.getElementById("S1"), S2 = document.getElementById("S2"), S3 = document.getElementById("S3"), S4 = document.getElementById("S4")
let userGuess = 8;
let randComb = colors[Math.floor(Math.random() * colors.length)];
let guess = 8;
const minScrambleAtGuess = 2;
const maxScrambleAtGuess = 5;
let scrambleAtGuess = 0;

function ready() {
    while (combination.length < 4) {
        let randComb = colors[Math.floor(Math.random() * colors.length)];
        combination.push(randComb);
        console.log(combination);
    }
}
function generateRandomScrambleAtGuess() {
    scrambleAtGuess = Math.floor(Math.random() * (maxScrambleAtGuess - minScrambleAtGuess + 1)) + minScrambleAtGuess;
    console.log(scrambleAtGuess);
}
function updateUserlist(color) {
    if (userComb.length < 4) {
        userComb.push(color);
    }
    for (let i = 1; i <= 4; i++) {
        let inputColor = document.getElementById("S" + i);
        if (inputColor.classList.length < 2) {
            inputColor.classList.add("dot", color);
            break;
        }

    }
}
function game() {

    if (userComb.length === 4) {
        let userInput = "Chosen Colors: ";
        for (let i = 0; i < userComb.length; i++) {
            userInput += userComb[i] + " ";
        }
        document.getElementById("userInput").innerText = userInput;
        checkGuess();
    } else {
        document.getElementById("result").innertext +=("Please make a guess with 4 colors");
    }
}
function checkGuess() {
    if(guess === scrambleAtGuess) {
        rescramble();
        document.getElementById("userInput").innerText +=("\nCode has been rescrambled")
    }


    let corColorcorPlace = 0;
    let corColorwrongPlace = 0;

    // Count black pegs (correct color in correct position)
    for (let i = 0; i < 4; i++) {
        if (userComb[i] === combination[i]) {
            corColorcorPlace++;
        }
    }

    //(correct color in wrong position)
    for (let i = 0; i < 4; i++) {
        if (userComb.includes(combination[i]) && userComb[i] !== combination[i]) {
            corColorwrongPlace++;
        }
    }
    // display feedback
    let feedbackMessage = `Black Pegs: ${corColorcorPlace}, White Pegs: ${corColorwrongPlace}`;
    document.getElementById("result").innerText = feedbackMessage;
    // did the user win
    if (corColorcorPlace === 4) {
        document.getElementById("result").innerText += "\nYou've guessed the combination!";
        document.getElementById("confirm").disabled = true;
        if (guess === 0) {
            document.getElementById("result").innerText += "\nYou've run out of guesses and lost :(";
            document.getElementById("confirm").disabled = true;
        }
    }
    // Clear the color
    for (let i = 1; i <= 4; i++) {
        let inputColor = document.getElementById("S" + i);
        inputColor.classList.remove(userComb[i - 1]);
        inputColor.removeAttribute("value");
    }
    guess--

    // Reset
    userComb = [];
}
function rescramble() {
    combination = [];
    ready();
}

ready();
generateRandomScrambleAtGuess();

