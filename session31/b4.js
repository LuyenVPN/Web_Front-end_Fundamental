let close = document.getElementsByTagName("i")[0];
let open = document.getElementsByClassName("open")[0];
open.addEventListener("click", function () {
  popup.style.display = "flex";
});
let popup = document.getElementsByClassName("content")[0];
close.addEventListener("click", function () {
  popup.style.display = "none";
});
