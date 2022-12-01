// Get DOM Elements
const word = document.getElementById('word');
const userWord = document.getElementById('user-word');
const scoreElement = document.getElementById('score');
const timeElement = document.getElementById('time');
const settingsBtn = document.getElementById('settings-btn');
const settingsContainer = document.getElementById('settings-container');
const settingsForm = document.getElementById('form');
const difficultyDropdown = document.getElementById('difficulty');
const gameover = document.getElementById('gameover');

const words = [

]
// Placeholder for selected word
let randomWord;
// Initialize score
let score = 0
// Initialize time
let time = 5;
// Initialize difficulty
let difficulty = 'easy';

// Function to generate a random word from the word array
function generateWord () {
    const generatedWord = words[Math.floor(Math.random() * words.length)];
    // console.log(generatedWord);
    return generatedWord;
}

// Function to render the new word
function renderWord() {
    // Generate a new random word
    randomWord = generateWord();
    // Update the DOM word element's inner HTML to new
    word.innerHTML = word;
}

// Function to increment the score by 1
function incrementScore(){
    score++;
    // Renderr new score in DOM
    scoreElement.innerHTML = score;
}

// Event Listeners
// Listen for input in the userWord input Element
userWord.addEventListener('input', e=>{
    // Save the value in the input field
    const userInput = e.target.value;
    //console.log(userInput);
    // Check to see if userInput matches the randomWord
    if (userInput === randomWord){
        // If the user has tyhped the correct word
        renderWord();
        // Increment score by 1
        incrementScore;
    }
})


// Run the renderWord function on page load
renderWord();