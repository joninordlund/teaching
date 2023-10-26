const pushed = document.getElementById("pushed");

function pushedFunc() {
  pushed.innerHTML = "pushed";
}
pushed.addEventListener("click", pushedFunc);

const white = document.getElementById("whiteBtn");
const green = document.getElementById("greenBtn");
const yellow = document.getElementById("yellowBtn");
const body = document.getElementsByTagName("body");

console.log(white, green, yellow, body);

function whiteFunc(ev) {
  console.log(ev.clientX, ev.clientY);
  console.log("white func");
  body[0].style.backgroundColor = "white";
}
white.addEventListener("click", whiteFunc);

function greenFunc() {
  console.log("green func");
  body[0].style.backgroundColor = "green";
}
green.addEventListener("click", greenFunc);

function yellowFunc() {
  console.log("white func");
  body[0].style.backgroundColor = "yellow";
}
yellow.addEventListener("click", yellowFunc);
