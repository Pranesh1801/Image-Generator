"use strict";
let img = document.querySelector(".img");
let btn = document.querySelector(".btn");
let body = document.querySelector("body");
let heading = document.querySelector("h1");

let randImg = function () {
  // heading.classList.add("hidden") // If you need to hide the heading uncomment this
  let randNum = Math.trunc(Math.random() * 11); //Total Images Count should be relpaced instead of 2
  console.log(randNum);
  img.style.display = "block";
  img.setAttribute("src", `img-${randNum}.png`);
};
body.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key == "Enter") randImg();
});
btn.addEventListener("click", randImg);
