const heading = document.getElementById("heading");
const paragraph = document.querySelector("p");

console.log(heading);
console.log(paragraph);

const button = document.querySelector("button");

button.addEventListener("click", () => {
    heading.textContent = "Updated Playlist!";
    paragraph.textContent = "The playlist has been updated.";

    console.log("The button was clicked.");
});

const buttonDiv = document.querySelector("div");

button.addEventListener("click", () => {
    console.log("Button event fired.");
});

buttonDiv.addEventListener("click", () => {
    console.log("Div event fired.");
});

const playlist = document.querySelector("ul");

playlist.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log("Song clicked: " + event.target.textContent);
    }
});

const jcccLink = document.querySelector("a");

jcccLink.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Default action was prevented.");
});

/*
1. What is the difference between getElementById() and querySelector()?

getElementById() selects an element using its ID.
querySelector() selects the first element that matches a CSS selector.

2. What is event bubbling?

Event bubbling is when an event starts on the clicked child element
and then moves up to its parent elements.

3. What is event delegation?

Event delegation is adding one event listener to a parent element
to handle events for its child elements.

4. Why would someone want to use preventDefault()?

preventDefault() stops the browser's normal action,
such as opening a link or submitting a form.
*/
