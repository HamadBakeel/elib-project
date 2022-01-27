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

// console.log(categories);

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
const cartCounter = document.getElementById("counter");
cartButton.forEach(function (button) {
  button.addEventListener("click", function () {
    if (typeof Storage !== undefined) {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
      } else {
        localStorage.clickcount = 0;
      }
      cartCounter.style.padding = "1px 3px"
      cartCounter.innerText = localStorage.clickcount;
    }
  });
});
window.onload = function () {
  if (localStorage.clickcount)
    if (localStorage.clickcount > 0)
      cartCounter.innerText = localStorage.clickcount;
    // else cartCounter.style.display = "none";
    else {
      cartCounter.style.padding = "0";
    }
};

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

// ============ show details =============
const offers = document.querySelectorAll(".current-offers .offer > img");
offers.forEach(function (offer) {
  offer.addEventListener("click", function () {
    location.href = "details.html";
  });
});

// =========== redirect to index.html ==============
const mainPage = document.querySelector(".index");
mainPage.addEventListener("click", function (e) {
  e.preventDefault();
  location.href = "index.html";
});

const logoRedirect = document.querySelector(".search-bar .img");
logoRedirect.addEventListener("click", function (e) {
  e.preventDefault();
  location.href = "index.html";
});
