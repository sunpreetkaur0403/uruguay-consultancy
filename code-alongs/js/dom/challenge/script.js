// I need to write the logic for this app
// a function that takes in 3 parameters
// returns a boolean

// age >= 21 for USA
// rest of countries  >= 18
//level of Drunk <= 3 to be fine

const checkIfAllowed = (age, country, levelOfDrunk) => {
    return (
        (age >= 21 && levelOfDrunk <= 3) ||
        (age >= 18 && levelOfDrunk <= 3 && country !== "USA")
    );
};

console.log(checkIfAllowed(21, "UK", 2)); // -> true

console.log(checkIfAllowed(18, "UK", 2)); // -> true
console.log(checkIfAllowed(18, "USA", 2)); // -> false
console.log(checkIfAllowed(12, "USA", 2)); // -> false
console.log(checkIfAllowed(32, "USA", 4)); // -> false

// when do I want to call this function?
// when the user submits the form
const form = document.querySelector(".form");
console.dir(form);

const messageDiv = document.querySelector("#message");
console.log(messageDiv.children);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // grab the values of the inputs inside the form

    // I could select individual inputs
    // input.value

    const formData = new FormData(form);
    console.log(formData);
    const age = formData.get("age");
    const country = formData.get("country");
    const levelOfDrunk = formData.get("drunk");

    console.log(age, country, levelOfDrunk);

    // based on the values, I need to decide what message I want
    let messageStr = "";

    const allowed = checkIfAllowed(age, country, levelOfDrunk);

    allowed ? (messageStr = "Come in") : (messageStr = "Go home");

    console.log(messageStr);

    // remove the paragraph from the div if it's there to make room for the new one
    if (messageDiv.children.length > 0) {
        messageDiv.removeChild(document.querySelector("#msg"));
    }

    // create a p tag to add to the page
    const newP = document.createElement("p");
    newP.id = "msg";

    // create a text node from messageSTr for the p tag
    const text = document.createTextNode(messageStr);

    // tell the text to go inside my paragraph
    newP.appendChild(text);

    // tell teh p tag where to go on the page
    messageDiv.appendChild(newP);

    // clear the from
    form.reset();

    // based pn the values, I need to decide what styling I want
    if (allowed) {
        if (messageDiv.classList.contains("message--failure")) {
            messageDiv.classList.remove("message--failure");
        }
        document.querySelector("img").src = "./assets/green_beer.svg";

        messageDiv.classList.add("message--success");
    } else {
        document.querySelector("img").src = "./assets/red_beer.svg";
        messageDiv.classList.add("message--failure");
    }
});
