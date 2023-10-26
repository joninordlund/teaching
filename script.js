// Tehtävä 1
const pushed = document.getElementById("pushed");

function pushedFunc() {
  pushed.innerHTML = "pushed";
}
pushed.addEventListener("click", pushedFunc);

// Tehtävä 2
const white = document.getElementById("whiteBtn");
const green = document.getElementById("greenBtn");
const yellow = document.getElementById("yellowBtn");
const body = document.querySelector("body");

console.log(white, green, yellow, body);

function whiteFunc(ev) {
  console.log("white func");
  body.style.backgroundColor = "white";
}
white.addEventListener("click", whiteFunc);

function greenFunc() {
  console.log("green func");
  body.style.backgroundColor = "green";
}
green.addEventListener("click", greenFunc);

function yellowFunc() {
  console.log("white func");
  body.style.backgroundColor = "yellow";
}
yellow.addEventListener("click", yellowFunc);

// Tehtävä 3
function mouseFunc(ev) {
  console.log("X=", ev.clientX, "Y=", ev.clientY);
}
body.addEventListener("mousemove", mouseFunc);
