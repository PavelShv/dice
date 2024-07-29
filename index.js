// Generate two random numbers between 0 and 5
var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);

// Select both image elements by their IDs
const leftImage = document.getElementById('leftImage');
const rightImage = document.getElementById('rightImage');

// Array of dice images
var diceImages = [
  "./images/dice1.png",
  "./images/dice2.png",
  "./images/dice3.png",
  "./images/dice4.png",
  "./images/dice5.png",
  "./images/dice6.png"
];

// Assign the random dice images to the img elements
leftImage.src = diceImages[randomNumber1];
rightImage.src = diceImages[randomNumber2];

const resultHeading = document.getElementById("result");
resultHeading.textContent = "Refresh me!";

if (randomNumber1> randomNumber2) {
resultHeading.textContent = "🚩Player 1 wins!";
} else if (randomNumber1<randomNumber2) {
resultHeading.textContent = "Player 2 wins!🚩";
} else {
resultHeading.textContent = "Draw! Play Again";
resultHeading.style.fontSize = "7.5rem";
};
