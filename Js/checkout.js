// const steps = document.querySelectorAll(".step");
// const done = document.querySelector(".done");
// const checkoutSteps = document.querySelectorAll(".checkout-step");
// // console.log(checkoutSteps);
// // const forms = document.forms;
// let progress = 1;
// const progressNumbers = 4;
// function handleNextStep() {
//   if (progress <= 0) {
//     progress = 1;
//   }
//   if (progress > progressNumbers - 1) {
//     console.log("stop");
//     progress = 4;
//     steps[3].classList.add("active");

//     // return;
//   } else {
//     console.log(progress);
//     steps[progress - 1].classList.add("active");
//     for (let i = 0; i < progressNumbers; i++) {
//       checkoutSteps[i].classList.add("hide");
//     }
//     checkoutSteps[progress].classList.remove("hide");

//     progress++;
//   }
// }
// function handlePrevStep() {
//   if (progress <= 1) {
//     progress = 1;
//     console.log("end");
//     steps[progress -1].classList.remove("active");
//     progress = 1;
//   } else {
//     console.log(progress);
//     steps[progress - 1].classList.remove("active");
//     for (let i = 0; i < progressNumbers; i++) {
//       checkoutSteps[i].classList.add("hide");
//     }
//     console.log(progress);
//     checkoutSteps[progress - 2].classList.remove("hide");
//   }
//   progress--;
// }

const steps = document.querySelectorAll(".step");
const checkoutSteps = document.querySelectorAll(".checkout-step");

let progress = 1;
const progressNumbers = 4;
function handleNextStep() {
  if (progress > progressNumbers) {
    console.log("stop");
  } else {
    steps[progress].classList.add("active");
    console.log(progress);
    for (let i = 0; i < progressNumbers; i++) {
      checkoutSteps[i].classList.add("hide");
    }
    checkoutSteps[progress].classList.remove("hide");
    if (progress < 3) progress++;
  }
}
function handlePrevStep() {
  if (progress <= 0) {
    console.log("stop prev");
    progress = 1;
  } else {
    steps[progress].classList.remove("active");
    for (let i = 0; i < progressNumbers; i++) {
      checkoutSteps[i].classList.add("hide");
    }
    checkoutSteps[progress - 1].classList.remove("hide");
    console.log(progress);
    progress--;
  }
}
