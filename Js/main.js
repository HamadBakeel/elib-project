const showDialog = document.getElementById("show-dialog");
const loginDialog = document.querySelector(".logIn");
const overlay = document.querySelector(".overlay");
const hideDialog = document.getElementById("hide-dialog");
const hideSignUpDialog = document.getElementById("hide-signUpDialog");
const login = document.querySelector(".login a");
// console.log(login);

const createNewAccout = document.getElementById("create-new-account");
const signUpDialog = document.querySelector(".signUp");

showDialog.addEventListener("click", function (e) {
  e.preventDefault();
  overlay.classList.toggle("hide");
  //   if(!showDialog.classList.contains("hide") || ! signUpDialog.classList.contains("hide"))
  loginDialog.classList.toggle("hide");
});
hideDialog.addEventListener("click", function () {
  overlay.classList.add("hide");
  loginDialog.classList.add("hide");
});

//   ============= signUp ==============
hideSignUpDialog.addEventListener("click", function () {
  signUpDialog.classList.add("hide");
  overlay.classList.add("hide");
});
createNewAccout.addEventListener("click", function () {
  overlay.classList.remove("hide");
  loginDialog.classList.add("hide");
  signUpDialog.classList.remove("hide");
});
login.addEventListener("click", function (e) {
  e.preventDefault();
  signUpDialog.classList.add("hide");
  loginDialog.classList.remove("hide");
});

// =============== categtories owl carousel ================
const categoriesContainer = document.querySelector(".offers");
const categories = document.querySelectorAll(".offer");
const slideButtons = document.querySelectorAll(".current-offers > img");
console.log(slideButtons);

// let span = document.getElementsByTagName("span");
// let product = document.getElementsByClassName("product");
let product_page = Math.ceil(categories.length / 4);
let l = 0;
let movePer = 15.34;
let maxMove = 50;
// mobile_view
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches) {
  movePer = 50.36;
  maxMove = 504;
}

let right_mover = () => {
  l = l + movePer;
  if (categories == 1) {
    l = 0;
  }
  for (const i of categories) {
    if (l > maxMove) {
      l = l - movePer;
    }
    i.style.right = "-" + l + "%";
  }
};
let left_mover = () => {
  l = l - movePer;
  if (l <= 0) {
    l = 0;
  }
  for (const i of categories) {
    if (product_page > 1) {
      i.style.right = "-" + l + "%";
    }
  }
};
slideButtons[0].onclick = () => {
  right_mover();
};
slideButtons[1].onclick = () => {
  left_mover();
};

// console.log(categories);

// ======== spacial offer count-down ==============

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// const special-offer = document.querySelector(".special-offer");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
// console.log(items);
const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

function getRemainingTime() {
  const futureTime = futureDate.getTime();
  const today = new Date().getTime();
  const t = futureTime - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all the values
  const days = Math.floor(t / oneDay);
  const hours = Math.floor((t % oneDay) / oneHour);
  const minutes = Math.floor((t % oneHour) / oneMinute);
  const seconds = Math.floor((t % oneMinute) / 1000);

  const values = [seconds, minutes, hours, days];

  function format(item) {
    if (item < 10) return `0${item}`;
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countDown);
    deadline.innerHTML = `<h4 class="expired">
sorry this special-offer has expired
</h4>`;
  }
}
let countDown = setInterval(getRemainingTime, 1000);
getRemainingTime();

// ========= filter ===========
// const filter = document.querySelector(".filter-container select");
// const categories = document.querySelectorAll(".category");

// filter.addEventListener("click", function (option) {
//   categories.forEach(function (category) {
//     if (!category.classList.contains(filter.value))
//       category.classList.add("hide");
//     else category.classList.remove("hide");
//     if (filter.value === "all") category.classList.remove("hide");
//   });
// });

// ============= header responsive =============
const showLinks = document.querySelector(".show-links-button");
const links = document.querySelector(".links");
showLinks.addEventListener("click", function () {
  links.classList.toggle("show-links");
  // console.log("me");
});

// =========== cart counter =============
const cartButton = document.querySelectorAll(
  ".current-offers .options img:nth-child(2)"
);
const cartCounter = document.querySelector("header .search-bar .cart");

// =========== language switch  =============
const languageSwitch = document.getElementById("language-switch");
const language = document.getElementById("language");
const languageText = document.getElementById("language-text");
languageSwitch.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(language.getAttribute("href"));
  if (language.getAttribute("href") === "css/english.css") {
    language.setAttribute("href", "css/arabic.css");
    languageText.textContent = "English";
  } else {
    language.setAttribute("href", "css/english.css");
    languageText.textContent = "عربي";
  }
});
