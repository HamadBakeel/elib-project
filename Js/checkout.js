const steps = document.querySelectorAll(".step");
const done = document.querySelector(".done");
const forms = document.forms;
let progress = 0;
const progressNumbers = 4;
function handleNextStep() {
  if (progress > progressNumbers) {
    console.log("stop");
  } else {
    steps[progress].classList.add("active");
    if (progress < 3) {
      forms[progress ].classList.remove("hide");
    } else done.classList.remove("hide");
    progress++;
    // alert(forms[0].classList)
  }
  console.log(document.forms);
}
function handlePrevStep() {
  if (progress <= 0) {
    console.log("stop prev");
  } else {
    steps[progress - 1].classList.remove("active");
    if (progress < 2) {
        forms[progress - 1].classList.add("hide");
      } else done.classList.add("hide");  }
  progress--;
}
