// ASSIGNMENT 1 | COMP1073 CLIENT-SIDE JAVASCRIPT

/* VARIABLES
-------------------------------------------------- */
const characters1 = ["Harry Potter", "Frodo Baggins", "Luke Skywalker", "Wonder Woman", "Spider-Man"]; // ARRAY OF FIRST CHARACTERS
const verbs = ["fights", "saves", "explores", "discovers", "defeats"]; // ARRAY OF VERBS
const adjectives = ["brave", "mysterious", "powerful", "clever", "fearless"]; // ARRAY OF ADJECTIVES
const characters2 = ["Voldemort", "Sauron", "Darth Vader", "Lex Luthor", "Thanos"]; // ARRAY OF SECOND CHARACTERS
const settings = ["in Hogwarts", "in Middle-Earth", "in a galaxy far, far away", "in Gotham City", "on the Avengers' ship"]; // ARRAY OF SETTINGS

let chosenCharacter1 = ""; // VARIABLE TO STORE THE CHOSEN FIRST CHARACTER
let chosenVerb = ""; // VARIABLE TO STORE THE CHOSEN VERB
let chosenAdjective = ""; // VARIABLE TO STORE THE CHOSEN ADJECTIVE
let chosenCharacter2 = ""; // VARIABLE TO STORE THE CHOSEN SECOND CHARACTER
let chosenSetting = ""; // VARIABLE TO STORE THE CHOSEN SETTING

/* FUNCTIONS
-------------------------------------------------- */
function getRandomElement(arr) { // FUNCTION TO GET A RANDOM ELEMENT FROM AN ARRAY
    return arr[Math.floor(Math.random() * arr.length)]; // RETURN A RANDOM ELEMENT FROM THE ARRAY
}

function character1_on_click() { // FUNCTION FOR HANDLING CLICK ON FIRST CHARACTER BUTTON
    chosenCharacter1 = getRandomElement(characters1); // GET A RANDOM FIRST CHARACTER
    document.getElementById("choosenNoun1").innerText = chosenCharacter1; // DISPLAY THE CHOSEN FIRST CHARACTER
}

function verb_on_click() { // FUNCTION FOR HANDLING CLICK ON VERB BUTTON
    chosenVerb = getRandomElement(verbs); // GET A RANDOM VERB
    document.getElementById("choosenVerb").innerText = chosenVerb; // DISPLAY THE CHOSEN VERB
}

function adjective_on_click() { // FUNCTION FOR HANDLING CLICK ON ADJECTIVE BUTTON
    chosenAdjective = getRandomElement(adjectives); // GET A RANDOM ADJECTIVE
    document.getElementById("choosenAdjective").innerText = chosenAdjective; // DISPLAY THE CHOSEN ADJECTIVE
}

function character2_on_click() { // FUNCTION FOR HANDLING CLICK ON SECOND CHARACTER BUTTON
    chosenCharacter2 = getRandomElement(characters2); // GET A RANDOM SECOND CHARACTER
    document.getElementById("choosenNoun2").innerText = chosenCharacter2; // DISPLAY THE CHOSEN SECOND CHARACTER
}

function setting_on_click() { // FUNCTION FOR HANDLING CLICK ON SETTING BUTTON
    chosenSetting = getRandomElement(settings); // GET A RANDOM SETTING
    document.getElementById("choosenSetting").innerText = chosenSetting; // DISPLAY THE CHOSEN SETTING
}

// CONCATENATE THE USER STORY AND DISPLAY
function playback_on_click() { // FUNCTION TO DISPLAY THE FINAL STORY
    const story = `${chosenCharacter1} ${chosenVerb} ${chosenAdjective} ${chosenCharacter2} ${chosenSetting}.`; // CREATE THE STORY STRING
    document.getElementById("story").innerText = story; // DISPLAY THE FINAL STORY
}

// GRABBING RANDOM ELEMENT FROM ARRAYS, CONCATENATE AND DISPLAY
function random_on_click() { // FUNCTION TO GENERATE A RANDOM STORY
    character1_on_click(); // CALL FUNCTION TO GET FIRST CHARACTER
    verb_on_click(); // CALL FUNCTION TO GET VERB
    adjective_on_click(); // CALL FUNCTION TO GET ADJECTIVE
    character2_on_click(); // CALL FUNCTION TO GET SECOND CHARACTER
    setting_on_click(); // CALL FUNCTION TO GET SETTING
    playback_on_click(); // CALL FUNCTION TO DISPLAY THE STORY
}

// RESET THE STORY
function reset_on_click() { // FUNCTION TO RESET ALL SELECTIONS
    chosenCharacter1 = ""; // CLEAR THE FIRST CHARACTER
    chosenVerb = ""; // CLEAR THE VERB
    chosenAdjective = ""; // CLEAR THE ADJECTIVE
    chosenCharacter2 = ""; // CLEAR THE SECOND CHARACTER
    chosenSetting = ""; // CLEAR THE SETTING
    document.getElementById("choosenNoun1").innerText = ""; // CLEAR DISPLAY OF FIRST CHARACTER
    document.getElementById("choosenVerb").innerText = ""; // CLEAR DISPLAY OF VERB
    document.getElementById("choosenAdjective").innerText = ""; // CLEAR DISPLAY OF ADJECTIVE
    document.getElementById("choosenNoun2").innerText = ""; // CLEAR DISPLAY OF SECOND CHARACTER
    document.getElementById("choosenSetting").innerText = ""; // CLEAR DISPLAY OF SETTING
    document.getElementById("story").innerText = ""; // CLEAR DISPLAY OF FINAL STORY
}

/* EVENT LISTENERS
-------------------------------------------------- */
document.getElementById("noun1").addEventListener("click", character1_on_click); // ADD CLICK EVENT LISTENER TO FIRST CHARACTER BUTTON
document.getElementById("verb").addEventListener("click", verb_on_click); // ADD CLICK EVENT LISTENER TO VERB BUTTON
document.getElementById("adjective").addEventListener("click", adjective_on_click); // ADD CLICK EVENT LISTENER TO ADJECTIVE BUTTON
document.getElementById("noun2").addEventListener("click", character2_on_click); // ADD CLICK EVENT LISTENER TO SECOND CHARACTER BUTTON
document.getElementById("setting").addEventListener("click", setting_on_click); // ADD CLICK EVENT LISTENER TO SETTING BUTTON
document.getElementById("playback").addEventListener("click", playback_on_click); // ADD CLICK EVENT LISTENER TO SHOW STORY BUTTON
document.getElementById("random").addEventListener("click", random_on_click); // ADD CLICK EVENT LISTENER TO RANDOM STORY BUTTON
document.getElementById("reset").addEventListener("click", reset_on_click); // ADD CLICK EVENT LISTENER TO RESET BUTTON

// DISPLAY STUDENT ID
document.getElementById("studentId").innerText = "Student ID: 200597138,PARTH SURESHCHANDRA THAKOR."; // SETS THE STUDENT ID AND NAME IN THE DESIGNATED PARAGRAPH