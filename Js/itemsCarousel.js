// =============== categtories owl carousel ================
// const categoriesContainer = document.querySelector(".offers");
const categories = document.querySelectorAll("#first-items-slider .offer");
const slideButtons = document.querySelectorAll(".current-offers > img");
const slideContainers = document.querySelectorAll(".current-offers");
// const firstItemsSlider = document.getElementById("first-items-slider");
console.log(slideButtons);

let product_page = Math.ceil(categories.length / 4);
let l = 0;
let movePer = 15.34;
let maxMove = 60;
// mobile_view
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches) {
  movePer = 40.36;
  maxMove = 220;
  slideButtons.forEach(function (button) {
    button.style.display = "none";
  });
  slideContainers.forEach(function (container) {
    container.style.margin = "0 20px";
  });
}
let mob_view2 = window.matchMedia("(max-width: 400px)");
if (mob_view2.matches) {
  movePer = 80;
  maxMove = 490;
}
let view3 = window.matchMedia("(min-width: 1000px)");
if (view3.matches) {
  movePer = 30;
  maxMove = 140;
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
// ---------- second slider ------
const offers2 = document.querySelectorAll("#second-items-slider .offer");
const slideButtons2 = document.querySelectorAll("#second-items-slider > img");
// const secondItemsSlider = document.getElementById("second-items-slider");

let right_mover2 = () => {
  l = l + movePer;
  if (offers2 == 1) {
    l = 0;
  }
  for (const i of offers2) {
    if (l > maxMove) {
      l = l - movePer;
    }
    i.style.right = "-" + l + "%";
  }
};
let left_mover2 = () => {
  l = l - movePer;
  if (l <= 0) {
    l = 0;
  }
  for (const i of offers2) {
    if (product_page > 1) {
      i.style.right = "-" + l + "%";
    }
  }
};

slideButtons2[0].onclick = () => {
  right_mover2();
};
slideButtons2[1].onclick = () => {
  left_mover2();
};

// ---------- third slider ------
const offers3 = document.querySelectorAll("#third-items-slider .offer");
const slideButtons3 = document.querySelectorAll("#third-items-slider > img");
// const secondItemsSlider = document.getElementById("second-items-slider");

let right_mover3 = () => {
  l = l + movePer;
  if (offers3 == 1) {
    l = 0;
  }
  for (const i of offers3) {
    if (l > maxMove) {
      l = l - movePer;
    }
    i.style.right = "-" + l + "%";
  }
};
let left_mover3 = () => {
  l = l - movePer;
  if (l <= 0) {
    l = 0;
  }
  for (const i of offers3) {
    if (product_page > 1) {
      i.style.right = "-" + l + "%";
    }
  }
};

slideButtons3[0].onclick = () => {
  right_mover3();
};
slideButtons3[1].onclick = () => {
  left_mover3();
};

// ---------- fourth slider ------
const offers4 = document.querySelectorAll("#fourth-items-slider .offer");
const slideButtons4 = document.querySelectorAll("#fourth-items-slider > img");
// const secondItemsSlider = document.getElementById("second-items-slider");

let right_mover4 = () => {
  l = l + movePer;
  if (offers4 == 1) {
    l = 0;
  }
  for (const i of offers4) {
    if (l > maxMove) {
      l = l - movePer;
    }
    i.style.right = "-" + l + "%";
  }
};
let left_mover4 = () => {
  l = l - movePer;
  if (l <= 0) {
    l = 0;
  }
  for (const i of offers4) {
    if (product_page > 1) {
      i.style.right = "-" + l + "%";
    }
  }
};

slideButtons4[0].onclick = () => {
  right_mover4();
};
slideButtons4[1].onclick = () => {
  left_mover4();
};

// ---------- fifth slider ------
const offers5 = document.querySelectorAll("#fifth-items-slider .offer");
const slideButtons5 = document.querySelectorAll("#fifth-items-slider > img");
// const secondItemsSlider = document.getElementById("second-items-slider");

let right_mover5 = () => {
  l = l + movePer;
  if (offers5 == 1) {
    l = 0;
  }
  for (const i of offers5) {
    if (l > maxMove) {
      l = l - movePer;
    }
    i.style.right = "-" + l + "%";
  }
};
let left_mover5 = () => {
  l = l - movePer;
  if (l <= 0) {
    l = 0;
  }
  for (const i of offers5) {
    if (product_page > 1) {
      i.style.right = "-" + l + "%";
    }
  }
};

slideButtons5[0].onclick = () => {
  right_mover5();
};
slideButtons5[1].onclick = () => {
  left_mover5();
};

// ---------- sixth slider ------
const offers6 = document.querySelectorAll("#sixth-items-slider .offer");
const slideButtons6 = document.querySelectorAll("#sixth-items-slider > img");
// const secondItemsSlider = document.getElementById("second-items-slider");

let right_mover6 = () => {
  l = l + movePer;
  if (offers6 == 1) {
    l = 0;
  }
  for (const i of offers6) {
    if (l > maxMove) {
      l = l - movePer;
    }
    i.style.right = "-" + l + "%";
  }
};
let left_mover6 = () => {
  l = l - movePer;
  if (l <= 0) {
    l = 0;
  }
  for (const i of offers6) {
    if (product_page > 1) {
      i.style.right = "-" + l + "%";
    }
  }
};

slideButtons6[0].onclick = () => {
  right_mover6();
};
slideButtons6[1].onclick = () => {
  left_mover6();
};

// ---------- seventh slider ------
const offers7 = document.querySelectorAll("#seventh-items-slider .offer");
const slideButtons7 = document.querySelectorAll("#seventh-items-slider > img");
// const secondItemsSlider = document.getElementById("second-items-slider");

let right_mover7 = () => {
  l = l + movePer;
  if (offers7 == 1) {
    l = 0;
  }
  for (const i of offers7) {
    if (l > maxMove) {
      l = l - movePer;
    }
    i.style.right = "-" + l + "%";
  }
};
let left_mover7 = () => {
  l = l - movePer;
  if (l <= 0) {
    l = 0;
  }
  for (const i of offers7) {
    if (product_page > 1) {
      i.style.right = "-" + l + "%";
    }
  }
};

slideButtons7[0].onclick = () => {
  right_mover7();
};
slideButtons7[1].onclick = () => {
  left_mover7();
};
