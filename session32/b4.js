let input = document.getElementById("input");
let ouput = document.getElementById("ouput");
document.getElementById("check").onclick = function () {
  let email = input.value;
  if (
    email.includes("@") &&
    (email.endsWith(".com") || email.endsWith(".vn"))
  ) {
    ouput.innerHTML = "Email hợp lệ!";
    ouput.style.color = "#008000";
  } else {
    ouput.innerHTML = "Email không hợp lệ!";
    ouput.style.color = "red";
  }
};
