// ============= image view =============
const imageViewContainer = document.querySelector(".img-view-container");
const imageView = document.querySelector(".img-view");
const smallImages = document.querySelectorAll(".small-imgs img");
const bigImg = document.querySelector(".big-img img");

smallImages.forEach(function (img) {
  //   console.log(img.getAttribute("src"));
  img.addEventListener("click", function () {
    console.log("clicked");
    imageViewContainer.classList.remove("hide");
    imageView.setAttribute("src", img.getAttribute("src"));
    bigImg.setAttribute("src", img.getAttribute("src"));
  });
});
imageViewContainer.addEventListener("click", function () {
  imageViewContainer.classList.add("hide");
});

// ============= header responsive =============
const showLinksButton = document.querySelector(".show-links-button");
const links = document.querySelector(".links");
showLinksButton.addEventListener("click", function () {
  links.classList.toggle("hide-links");
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
