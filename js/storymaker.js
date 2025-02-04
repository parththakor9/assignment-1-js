// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
const characters1 = ["Harry Potter", "Frodo Baggins", "Luke Skywalker", "Wonder Woman", "Spider-Man"];
const verbs = ["fights", "saves", "explores", "discovers", "defeats"];
const adjectives = ["brave", "mysterious", "powerful", "clever", "fearless"];
const characters2 = ["Voldemort", "Sauron", "Darth Vader", "Lex Luthor", "Thanos"];
const settings = ["in Hogwarts", "in Middle-Earth", "in a galaxy far, far away", "in Gotham City", "on the Avengers' ship"];

let chosenCharacter1 = "";
let chosenVerb = "";
let chosenAdjective = "";
let chosenCharacter2 = "";
let chosenSetting = "";

/* Functions
-------------------------------------------------- */
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function character1_on_click() {
    chosenCharacter1 = getRandomElement(characters1);
    document.getElementById("choosenNoun1").innerText = chosenCharacter1;
}

function verb_on_click() {
    chosenVerb = getRandomElement(verbs);
    document.getElementById("choosenVerb").innerText = chosenVerb;
}

function adjective_on_click() {
    chosenAdjective = getRandomElement(adjectives);
    document.getElementById("choosenAdjective").innerText = chosenAdjective;
}

function character2_on_click() {
    chosenCharacter2 = getRandomElement(characters2);
    document.getElementById("choosenNoun2").innerText = chosenCharacter2;
}

function setting_on_click() {
    chosenSetting = getRandomElement(settings);
    document.getElementById("choosenSetting").innerText = chosenSetting;
}

// Concatenate the user story and display
function playback_on_click() {
    const story = `${chosenCharacter1} ${chosenVerb} ${chosenAdjective} ${chosenCharacter2} ${chosenSetting}.`;
    document.getElementById("story").innerText = story;
}

// Grabbing random element from arrays, concatenate and display
function random_on_click() {
    character1_on_click();
    verb_on_click();
    adjective_on_click();
    character2_on_click();
    setting_on_click();
    playback_on_click();
}

// Reset the story
function reset_on_click() {
    chosenCharacter1 = "";
    chosenVerb = "";
    chosenAdjective = "";
    chosenCharacter2 = "";
    chosenSetting = "";
    document.getElementById("choosenNoun1").innerText = "";
    document.getElementById("choosenVerb").innerText = "";
    document.getElementById("choosenAdjective").innerText = "";
    document.getElementById("choosenNoun2").innerText = "";
    document.getElementById("choosenSetting").innerText = "";
    document.getElementById("story").innerText = "";
}

/* Event Listeners
-------------------------------------------------- */
document.getElementById("noun1").addEventListener("click", character1_on_click);
document.getElementById("verb").addEventListener("click", verb_on_click);
document.getElementById("adjective").addEventListener("click", adjective_on_click);
document.getElementById("noun2").addEventListener("click", character2_on_click);
document.getElementById("setting").addEventListener("click", setting_on_click);
document.getElementById("playback").addEventListener("click", playback_on_click);
document.getElementById("random").addEventListener("click", random_on_click);
document.getElementById("reset").addEventListener("click", reset_on_click);

// Display student ID
document.getElementById("studentId").innerText = "Student ID: 200597138."; // Replace with your actual ID