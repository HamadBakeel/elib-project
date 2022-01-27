// ------ filter by price -------
const priceFilter = document.getElementById("price-range");
const rangeShow = document.getElementById("range");
const prices = document.querySelectorAll(
  ".current-offers .price p:first-child"
);
const offers2 = document.querySelectorAll(".offer");
// const
priceFilter.addEventListener("change", function () {
  rangeShow.innerText = priceFilter.value;
  for (let i = 0; i < offers2.length; i++) {
    if (parseFloat(prices[i].innerText) > priceFilter.value) {
      offers2[i].classList.add("hide");
    } else {
      offers2[i].classList.remove("hide");
    }
  }
});
