// Part 1: Browser Information

const browserInfo = document.getElementById("browserInfo");

browserInfo.innerHTML =
    "Current URL: " + location.href + "<br>" +
    "Browser Language: " + navigator.language + "<br>" +
    "Online: " + navigator.onLine + "<br>" +
    "Screen Width: " + screen.width + "<br>" +
    "Screen Height: " + screen.height;


// Part 2: Window Information

console.log("Window Width: " + window.innerWidth);
console.log("Window Height: " + window.innerHeight);


// Part 3: Form Properties

const form = document.forms["userForm"];

const nameField = form.elements["userName"];
const websiteField = form.elements["favoriteWebsite"];

const userInfo = document.getElementById("userInfo");
const urlInfo = document.getElementById("urlInfo");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const userName = nameField.value;
    const favoriteWebsite = websiteField.value;

    userInfo.innerHTML =
        "Name: " + userName + "<br>" +
        "Favorite Website: " + favoriteWebsite;


    // Part 5: URL Objects

    const websiteURL = new URL(favoriteWebsite);

    urlInfo.innerHTML =
        "Hostname: " + websiteURL.hostname + "<br>" +
        "Protocol: " + websiteURL.protocol + "<br>" +
        "Pathname: " + websiteURL.pathname;


    // Part 6: Local Storage

    localStorage.setItem("userName", userName);

    const storedName = localStorage.getItem("userName");

    console.log("Stored Name: " + storedName);


    // Part 7: Session Storage

    sessionStorage.setItem("favoriteWebsite", favoriteWebsite);

    const storedWebsite = sessionStorage.getItem("favoriteWebsite");

    console.log("Stored Website: " + storedWebsite);

});


// Part 4: Focus & Blur

nameField.addEventListener("focus", function() {
    console.log("Name field was selected.");
});

nameField.addEventListener("blur", function() {
    console.log("Name field was left.");
});

// Part 8: History Object

const backButton = document.getElementById("backButton");
const forwardButton = document.getElementById("forwardButton");

backButton.addEventListener("click", function() {
    console.log("Back button was clicked.");
    history.back();
});

forwardButton.addEventListener("click", function() {
    console.log("Forward button was clicked.");
    history.forward();
});

// Reflection

// 1. What is the difference between localStorage and sessionStorage?
// localStorage keeps the data longer. sessionStorage keeps it only for the current session.

// 2. What information can the Navigator object provide?
// It can give information like the browser language and online status.

// 3. What happens when an input field receives focus?
// It means the input field is selected and ready for the user to type.

// 4.
// It can be used to get information from a URL, like the hostname, protocol, and pathname.