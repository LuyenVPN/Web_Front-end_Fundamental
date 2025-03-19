let body = document.getElementsByTagName("body")[0];
let red = document.getElementsByClassName("red")[0];
red.addEventListener("click", function () {
  body.style.backgroundColor = "red";
  body.style.color = "white";
});
let green = document.getElementsByClassName("green")[0];
green.addEventListener("click", function () {
  body.style.backgroundColor = "green";
  body.style.color = "white";
});
let purple = document.getElementsByClassName("purple")[0];
purple.addEventListener("click", function () {
  body.style.backgroundColor = "purple";
  body.style.color = "white";
});
