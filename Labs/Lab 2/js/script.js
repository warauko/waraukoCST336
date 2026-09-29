console.log("Whoa");

//make a variable called answer with a value of 48
//set aside a space named answer that has 48 in it
let answer = Math.floor(Math.random() * 99) + 1;
console.log(answer);

let guesses = 0;
let userWins = 0;
let userLosses = 0;
let triesLeft = 7;

const winMessage = "Congratulations you guessed it";
const guessPrompt = "Guess a number between 1 and 99";

//look up an element with an id of guessMessage (#guessMessage)
//and bind it to a variable named guessMessage
let guessMessage = document.querySelector("#guessMessage");


//making a  function sets aside the code so you can run it later
//it's a named block of code, it starts and ends with curly braces
function showWin() {
    //equals (=) in javascript means change the value
    //change the text inside an element
    guessMessage.textContent = winMessage + " in " + guesses + " tries!";

    //the style object in any element lets you change CSS stuff
    //change the color of the font to green
    guessMessage.style.color = "green";
}

//a function name with parentheses after it, 
//makes the funciton happen immediately
//showWin();

let guessButton = document.querySelector("#guessButton");
//this makes it so when you click on guess button, the function showWin happens
//guessButton.addEventListener("click", showWin);

//shorthand 
guessButton.addEventListener('click', function () {

    if (triesLeft === 0) {
        guessMessage.textContent = "You lost! The answer was " + answer;
        guessMessage.style.color = "red";
        return;
    }

    if (guessInput.value < 1 || guessInput.value > 99) {
        guessMessage.textContent = "Please enter a number between 1 and 99";
        guessMessage.style.color = "red";
        return;
    }

    if (guesses > 0) {
        guessOutput.insertAdjacentHTML("beforeend", ", " + guessInput.value + " ");
    } else {
    document.getElementById("guessOutput").innerHTML = "You guessed: " + guessInput.value;
    }

    guesses += 1;
    console.log(triesLeft);

    if (+guessInput.value === answer) {
        showWin();
        console.log("You won!");
    } else if (guessInput.value < answer) {
        guessMessage.textContent = "Too low, " + triesLeft + " tries left!";
        guessMessage.style.color = "red";
        triesLeft -= 1;
    } else if (guessInput.value > answer) {
        guessMessage.textContent = "Too high, " + triesLeft + " tries left!";
        guessMessage.style.color = "red";
        triesLeft -= 1;
    }

});





let guessInput = document.querySelector("#guessInput");



//Question operators
// == match - the left and right have to match values for the answer to be yes
// != not match - the left and right have to be different for the answer to be yes
// === strict match - the left right have to have the same value and type for the answer to be yes

//the + converts the text in the input box to a number
// we compare to the answer to see if they match
+guessInput.value === answer


//if statement:
// if (question) {
//     if answer is yes, do this
// }
// else {
//     otherwise, do this
// }


//stacked if statement
//if (question 1) {
    // if answer is yes, do this
//} else if (question 2) {
    //if answer is yes, do this
//} else if (question 3) {
    //if answer is yes, do this
//}