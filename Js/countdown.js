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

const counters = document.querySelectorAll(".deadline");
console.log(counters);
var countDownDate = [
  new Date("Jan 29, 2022 10:3:56").getTime(),
  new Date("Jan 28, 2022 15:7:45").getTime(),
  new Date("Feb 30, 2022 12:4:22").getTime(),
  new Date("Jan 30, 2022 9:55:11").getTime(),
  new Date("Jan 30, 2022 4:53:5").getTime(),
  new Date("Jan 30, 2022 5:37:2").getTime(),
  new Date("Jan 29, 2022 7:12:33").getTime(),
];

counters.forEach((element, index) => {
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate[index] - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"

    element.innerText =
      seconds +
      " :" +
      minutes +
      " :" +
      hours +
      " :" +
      days +
      //   ": " +
      " الوقت المتبقي  ";
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      element.innerText = "expire";
      // document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
});

// const special-offer = document.querySelector(".special-offer");
// const deadline = document.querySelector(".deadline");
// const items = document.querySelectorAll(".deadline-format h4");
// // console.log(items);
// const tempDate = new Date();
// const tempYear = tempDate.getFullYear();
// const tempMonth = tempDate.getMonth();
// const tempDay = tempDate.getDate();
// const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

// const year = futureDate.getFullYear();
// const month = months[futureDate.getMonth()];
// const date = futureDate.getDate();
// const weekday = weekdays[futureDate.getDay()];
// const hours = futureDate.getHours();
// const mins = futureDate.getMinutes();

// function getRemainingTime() {
//   const futureTime = futureDate.getTime();
//   const today = new Date().getTime();
//   const t = futureTime - today;

//   const oneDay = 24 * 60 * 60 * 1000;
//   const oneHour = 60 * 60 * 1000;
//   const oneMinute = 60 * 1000;
//   // calculate all the values
//   const days = Math.floor(t / oneDay);
//   const hours = Math.floor((t % oneDay) / oneHour);
//   const minutes = Math.floor((t % oneHour) / oneMinute);
//   const seconds = Math.floor((t % oneMinute) / 1000);

//   const values = [seconds, minutes, hours, days];

//   function format(item) {
//     if (item < 10) return `0${item}`;
//     return item;
//   }

//   items.forEach(function (item, index) {
//     item.innerHTML = format(values[index]);
//   });
//   if (t < 0) {
//     clearInterval(countDown);
//     deadline.innerHTML = `<h4 class="expired">
//   sorry this special-offer has expired
//   </h4>`;
//   }
// }
// let countDown = setInterval(getRemainingTime, 1000);
// getRemainingTime();

// // =============== second counter =============
// // ======== spacial offer count-down ==============
//   const deadline = document.getElementById("deadline2");
//   const items = document.querySelectorAll("#deadline2 .deadline-format h4");
//   // console.log(items);
//   const tempDate2 = new Date();
//   const tempYear2 = tempDate.getFullYear();
//   const tempMonth2 = tempDate.getMonth();
//   const tempDay2 = tempDate.getDate();
//   const futureDate2 = new Date(tempYear2, tempMonth2, tempDay2 + 8, 1, 11, 0);

//   const year2 = futureDate2.getFullYear();
//   const month2 = months[futureDate.getMonth()];
//   const date2 = futureDate2.getDate();
//   const weekday2 = weekdays[futureDate.getDay()];
//   const hours2 = futureDate2.getHours();
//   const mins2 = futureDate2.getMinutes();

//   function getRemainingTime2() {
//     const futureTime2 = futureDate2.getTime();
//     const today2 = new Date().getTime();
//     const t2 = futureTime2 - today2;

//     const oneDay2 = 24 * 60 * 60 * 1000;
//     const oneHour2 = 60 * 60 * 1000;
//     const oneMinute2 = 60 * 1000;
//     // calculate all the values
//     const days2 = Math.floor(t2 / oneDay2);
//     const hours2 = Math.floor((t2 % oneDay2) / oneHour2);
//     const minutes2 = Math.floor((t2 % oneHour2) / oneMinute2);
//     const seconds2 = Math.floor((t2 % oneMinute2) / 1000);

//     const values2 = [seconds2, minutes2, hours2, days2];

//     function format(item) {
//       if (item < 10) return `0${item}`;
//       return item;
//     }

//     items.forEach(function (item, index) {
//       item.innerHTML = format(values2[index]);
//     });
//     if (t2 < 0) {
//       clearInterval(countDown);
//       deadline.innerHTML = `<h4 class="expired">
//     sorry this special-offer has expired
//     </h4>`;
//     }
//   }
//   let countDown = setInterval(getRemainingTime, 1000);
//   getRemainingTime();
