// ============= image view =============
const imageViewContainer = document.querySelector(".img-slider-container");
const slideImage = document.querySelector(".img-view > img");
const smallImages = document.querySelectorAll(".small-imgs img");
const bigImg = document.querySelector(".big-img img");
const exit = document.getElementById("exit");

bigImg.addEventListener("click", function () {
  imageViewContainer.classList.remove("hide");
});
const slideButtons = document.querySelectorAll(
  ".img-slider-container .buttons img"
);
const images = [
  `imgs/books/yourNewSelf.jpg`,
  `imgs/books/realConfidence.jpg`,
  `imgs/books/fullSelfTrust.jpg`,
  `imgs/books/beYou.jpg`,
  `imgs/books/karmaDiagnosis.jpg`,
];

let index = 0;
slideButtons[0].addEventListener("click", function () {
  if (index < images.length) {
    slideImage.setAttribute("src", images[index]);
    console.log(images[index]);
    console.log(index);
    index++;
  } else {
    slideImage.innerHTML = images[index];
    console.log(index);
    index = 0;
  }
});
slideButtons[1].addEventListener("click", function () {
  if (index > 0) {
    index--;
    slideImage.setAttribute("src", images[index]);
    console.log(images[index]);
    console.log(index);
  } else if (index === 0) {
    index = 4;
    slideImage.setAttribute("src", images[index]);
  }
});
exit.addEventListener("click", function () {
  imageViewContainer.classList.add("hide");
});

// smallImages.forEach(function (img) {
//   img.addEventListener("click", function () {
//     console.log("clicked");
//     imageViewContainer.classList.remove("hide");
//     imageView.setAttribute("src", img.getAttribute("src"));
//     bigImg.setAttribute("src", img.getAttribute("src"));
//   });
// });

// ============= header responsive =============
const showLinksButton = document.querySelector(".show-links-button");
const links = document.querySelector(".links");
showLinksButton.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

// ============== show more or less of the book specs ===========
const showDetails = document.querySelector(".show-details");
const specs = document.querySelector(".specs ul");
showDetails.addEventListener("click", function () {
  if (!specs.classList.contains("show-ul")) {
    specs.classList.add("show-ul");
    specs.classList.remove("shadow");
    showDetails.textContent = "عرض أقل";
  } else {
    specs.classList.remove("show-ul");
    specs.classList.add("shadow");
    showDetails.textContent = "عرض أكثر";
  }
});

// ========== show more or less reviews of the book ============
const showReviewsButton = document.querySelector(".show-reviews-button");
const reviews = document.querySelector("div.reviews");
console.log(reviews);
showReviewsButton.addEventListener("click", function () {
  if (!reviews.classList.contains("show-reviews")) {
    reviews.classList.add("show-reviews");
    // specs.classList.remove("shadow");
    showReviewsButton.textContent = "عرض مراجعات أقل";
    // showReviewsButton.
  } else {
    reviews.classList.remove("show-reviews");
    // specs.classList.add("shadow");
    showReviewsButton.textContent = "عرض مراجعات أكثر (15)";
  }
});

const cartCounter = document.getElementById("counter");
window.onload = function () {
  if (localStorage.clickcount)
    if (localStorage.clickcount > 0)
      cartCounter.innerText = localStorage.clickcount;
    else cartCounter.style.display = "none";
};
