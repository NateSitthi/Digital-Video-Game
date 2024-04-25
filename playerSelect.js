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
    conButton = document.getElementById('confirm');
    // conButton.style.display ='none';
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
        let currentSpan = document.getElementById("S" + i);
        if (currentSpan.classList.length < 2) {
            currentSpan.classList.add("dot", color);
            break;
        }

    }
}
function game() {
    if (userComb.length === 4) {
        let userInput = "Your input: ";
        for (let i = 0; i < userComb.length; i++) {
            userInput += userComb[i] + " ";
        }

        // Update the previous guess section with the user's combination
        for (let i = 0; i < 4; i++) {
            let prevGuessDot = document.getElementById("PG" + (i + 1));
            prevGuessDot.classList.add(userComb[i]); // Add new color class
        }

        // Clear the result message
        document.getElementById("result").innerText = "";

        checkGuess();
    } else {
        document.getElementById("result").innerText += "Please make a guess with 4 colors";
    }
}

function checkGuess() {
    if(guess === scrambleAtGuess) {
        rescramble();
        document.getElementById("userInput").innerText +=("\nCode has been rescrambled")
    }


    let blackPegs = 0;
    let whitePegs = 0;

    //(correct color in correct position)
    for (let i = 0; i < 4; i++) {
        if (userComb[i] === combination[i]) {
            blackPegs++;
        }
    }

    //(correct color in wrong position)
    for (let i = 0; i < 4; i++) {
        if (userComb.includes(combination[i]) && userComb[i] !== combination[i]) {
            whitePegs++;
        }
    }
    // Display feedback
    let feedbackMessage = `Black Pegs: ${blackPegs}, White Pegs: ${whitePegs}`;
    document.getElementById("result").innerText = feedbackMessage;
    // win condition
    if (blackPegs === 4) {
        document.getElementById("result").innerText += "\nCongratulations! You've guessed the combination!";
        document.getElementById("confirm").disabled = true;
        if (guess === 0) {
            document.getElementById("result").innerText += "\nYou've run out of guesses.";
            document.getElementById("confirm").disabled = true;
        }
    }
    // Clear the color
    for (let i = 1; i <= 4; i++) {
        let currentSpan = document.getElementById("S" + i);
        currentSpan.classList.remove(userComb[i - 1]);
        currentSpan.removeAttribute("value");
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

