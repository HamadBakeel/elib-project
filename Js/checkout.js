const steps = document.querySelectorAll(".step");
const checkoutSteps = document.querySelectorAll(".checkout-step");

let progress = 1;
const progressNumbers = 4;
function handleNextStep() {
  if (progress == 4) {
    localStorage.clickcount = 0;
    location.href = "index.html";
  } else {
    steps[progress].classList.add("active");
    for (let i = 0; i < progressNumbers; i++) {
      checkoutSteps[i].classList.add("hide");
    }
    checkoutSteps[progress].classList.remove("hide");
  }
  if (progress < 4) progress++;
}

function handlePrevStep() {
  if (progress === 4) progress = 3;
  if (progress <= 0) {
    progress = 1;
  } else {
    steps[progress].classList.remove("active");
    for (let i = 0; i < progressNumbers; i++) {
      checkoutSteps[i].classList.add("hide");
    }
    checkoutSteps[progress - 1].classList.remove("hide");
    progress--;
  }
}
