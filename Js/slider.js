const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener("click", slideNext);
function slideNext() {
  counter++;
  carousel();
}
function autoSlide() {
  // counter = 0;
  if (counter < slides.length) {
    carousel();
    counter++;
  } else {
    counter = 0;
    slideNext();
  }
  setTimeout(autoSlide, 5000);
}
autoSlide();
prevBtn.addEventListener("click", slidePrev);
function slidePrev() {
  counter--;
  carousel();
}

function carousel() {
  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.style.display = "none";
