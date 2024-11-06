// TODO: Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-button")

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
}

// TODO: Register a 'click' event listener for the theme button
themeButton.addEventListener("click", toggleDarkMode);

// Add your query for the sign now button here
let signNowButton = document.getElementById("sign-now-button")

const addSignature = () => {
    let nameInput = document.getElementById("name-input").value
    let hometownInput = document.getElementById("hometown-input").value
    let emailInput = document.getElementById("email-input").value

    let newSignature = document.createElement("p")
    newSignature.textContent = `🖊️ ${nameInput} from ${hometownInput} supports this.`;

    let signaturesSection = document.querySelector(".signatures"); 

    signaturesSection.appendChild(newSignature);
}

// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete validation form

const validateForm = () => {

    let containsErrors = false;
    var petitionInputs = document.getElementById("sign-petition").elements;
    // TODO: Loop through all inputs
    for (let i = 0; i < petitionInputs.length; i++) {
        if (petitionInputs[i].value.length < 2) {
            containsErrors = true;
            petitionInputs[i].classList.add('error');
        }
        else {
            petitionInputs[i].classList.remove('error');
        }
    }

    if (containsErrors == false) {
        addSignature();
        for (let i = 0; i < petitionInputs.length; i++) {
            containsErrors = false;
            petitionInputs[i].value = "";
        }
    }
    // TODO: Validate the value of each input
    // TODO: Call addSignature() and clear fields if no errors
  
  }
  
signNowButton.addEventListener('click', validateForm);