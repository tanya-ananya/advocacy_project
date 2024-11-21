let themeButton = document.getElementById("theme-button")

const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
}

themeButton.addEventListener("click", toggleDarkMode);

let signNowButton = document.getElementById("sign-now-button")

const addSignature = (person) => {
    let newSignature = document.createElement("p");
    newSignature.textContent = `🖊️ ${person.name} from ${person.hometown} supports this.`;
  
    let signaturesSection = document.querySelector(".signatures"); 
    signaturesSection.appendChild(newSignature);
  };  

const validateForm = () => {
    let containsErrors = false;
    let petitionInputs = document.getElementById("sign-petition").elements;
  
    for (let i = 0; i < petitionInputs.length; i++) {
      if (petitionInputs[i].value.length < 2) {
        containsErrors = true;
        petitionInputs[i].classList.add("error");
      } else {
        petitionInputs[i].classList.remove("error");
      }
    }
  
    if (!containsErrors) {
      const person = {
        name: document.getElementById("name-input").value,
        hometown: document.getElementById("hometown-input").value,
        email: document.getElementById("email-input").value
      };
  
      addSignature(person);
  
      toggleModal(person);
  
      for (let i = 0; i < petitionInputs.length; i++) {
        petitionInputs[i].value = "";
      }
    }
};
  

signNowButton.addEventListener('click', validateForm);

let animation = {
    revealDistance: 500,
    initialOpacity: 0,
    transitionDelay: 0,
    transitionDuration: '2s',
    transitionProperty: 'all',
    transitionTimingFunction: 'ease'
};

let revealableContainers = document.querySelectorAll('.revealable');

function reveal() {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active');
    } else {
      revealableContainers[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);

function toggleModal(person) {
    let modal = document.getElementById("thanks-modal");
    let modalContent = document.getElementById("thanks-modal-content");
  
    modal.style.display = "flex";
  
    modalContent.textContent = `Thank you so much, ${person.name}! ${person.hometown} represent!`;
  
    let intervalId = setInterval(scaleImage, 500);
  
    setTimeout(() => {
      modal.style.display = "none";
      clearInterval(intervalId);
      modal.removeEventListener('click', hideModal);
    }, 4000);
  
    function hideModal(event) {
      if (!modalContent.contains(event.target)) {
        modal.style.display = "none";
        clearInterval(intervalId);
        modal.removeEventListener('click', hideModal);
      }
    }
  
    modal.addEventListener('click', hideModal);
}

let scaleFactor = 1;
let modalImage = document.querySelector('#thanks-modal img');
  
function scaleImage() {
    if (scaleFactor === 1) {
      scaleFactor = 0.8;
    } else {
      scaleFactor = 1;
    }
  
    modalImage.style.transform = `scale(${scaleFactor})`;
}
   
  