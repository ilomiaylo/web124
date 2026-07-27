// Part 2: JavaScript Objects and Arrays

const places = [
    "Waikiki Beach",
    "Maui",
    "Hawaii Volcanoes National Park"
];

const hawaii = {
    destination: "Hawaii",
    activity: "Snorkeling",
    reason: "Beautiful nature and ocean"
};

const placeList = document.getElementById("placeList");

places.forEach(function(place) {
    const li = document.createElement("li");
    li.textContent = place;
    placeList.appendChild(li);
});

document.getElementById("activityInfo").textContent =
    "One activity I would love to try is " + hawaii.activity + ".";

    // Part 3: DOM Selection and Modification

const changeButton = document.getElementById("changeMessage");
const message = document.querySelector(".message");

changeButton.addEventListener("click", function() {
    message.textContent = "Hawaii is definitely on my travel bucket list!";
});

// Part 4: Events

const whyHeading = document.getElementById("whyHeading");

whyHeading.addEventListener("mouseover", function() {
    message.textContent = "Hawaii has beautiful beaches, nature, and warm weather!";
});

// Part 5: Event Delegation

const placeMessage = document.getElementById("placeMessage");

// Event delegation is used here.
// The click listener is on the parent list instead of each list item.
// When an li is clicked, the event bubbles up to the ul.

placeList.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        placeMessage.textContent =
            "You selected: " + event.target.textContent;
    }
});

// Part 6: Forms

const travelForm = document.getElementById("travelForm");
const formMessage = document.getElementById("formMessage");

travelForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const userName = document.getElementById("userName").value;
    const dreamPlace = document.getElementById("dreamPlace").value;

    formMessage.textContent =
        userName + " would like to visit " + dreamPlace + "!";

    localStorage.setItem("dreamPlace", dreamPlace);
});

// Part 7: Browser Objects

const pageLocation = document.getElementById("pageLocation");
const screenSize = document.getElementById("screenSize");

pageLocation.textContent = "Current URL: " + location.href;
screenSize.textContent = "Screen Width: " + screen.width + " pixels";

// Part 8: Storage

const savedPlace = document.getElementById("savedPlace");
const storedPlace = localStorage.getItem("dreamPlace");

if (storedPlace) {
    savedPlace.textContent = "Saved destination: " + storedPlace;
}

/*
Part 9: Reflection

1. Which JavaScript feature was easiest for you to use?
DOM selection was the easiest for me because it was easy to select elements and change the text.

2. Which JavaScript feature was most challenging?
Event delegation was the most challenging for me because it was a little confusing at first.

3. How did you use events in your project?
I used click and mouseover events to change messages on the page.

4. How did you use storage in your project?
I used localStorage to save the place entered by the user.
*/