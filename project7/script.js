// Get DOM ELements
const word = document.getElementById('word');
const incorrectLetters = document.getElementById('incorrect-letters');
const popup = document.getElementById('popup-container');
const finalMessage = document.getElementById('finalMessage');
const playBtn = document.getElementById('playBtn');
const notification = document.getElementById('notification');
// Get DOM Elements for Hangman
const figureParts = document.querySelectorAll('.figure-parts');

// This is the pool of words which will be used to select random words
const words = ["teach","judge","thread","air","be","aside","due","writer","aware","shelter","movement","color","for","upon","floor","direction","somewhere","start","massage","chicken","canal","aware","central","school","since","largest","sky","knife","neighborhood","bow","thread","solve","basis","engine","band","sentence","replace","find","kids","cookies","numeral","sail"];

// Select a word at random from words array
// Let selectedWord = word[]
//console.log(Math.random());
//console.log(words.length);
let selectedWord = word[Math.floor(Math.random()) * ];

// Tracking arrays for correct and incorrect guesses
const correctLettersArray = [];
const incorrectLettersArray = [];

// Function to display the selectedWord in the DOM
function displayWord(){
    word.innerHTML = `
        ${selectedWord
            .split('')
            .map(letter => `
            ))
        }
    `
};

// Execute displayWord on page load
displayWord();