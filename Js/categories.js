// ------ filter by price -------
const priceFilter = document.getElementById("price-range");
const rangeShow = document.getElementById("range");
const prices = document.querySelectorAll(
  ".current-offers .price p:first-child"
);
const offers = document.querySelectorAll(".offer");
// const
priceFilter.addEventListener("change", function () {
  rangeShow.innerText = priceFilter.value;
  for (let i = 0; i < offers.length; i++) {
    if (parseFloat(prices[i].innerText) > priceFilter.value) {
      offers[i].classList.add("hide");
    } else {
      offers[i].classList.remove("hide");
    }
  }
});
