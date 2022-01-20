const showDialog = document.getElementById("show-dialog");
const loginDialog = document.querySelector(".logIn");
const overlay = document.querySelector(".overlay");
const hideDialog = document.getElementById("hide-dialog");
const hideSignUpDialog = document.getElementById("hide-signUpDialog");

const createNewAccout = document.getElementById("create-new-account");
const signUpDialog = document.querySelector(".signUp");
console.log(signUpDialog);

console.log(showDialog);
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
