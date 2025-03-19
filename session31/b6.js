let fixedUsername = "huanrose@gmail.com";
let fixedPassword = "123456";
let form = document.getElementsByClassName("login-container")[0];
form.addEventListener("submit", function (events) {
  login();
});
function login() {
  const inputUsername = document.getElementById("username").value;
  const inputPassword = document.getElementById("password").value;
  if (inputUsername === fixedUsername && inputPassword === fixedPassword) {
    console.log("Đăng nhập thành công");
  } else {
    console.log("Đăng nhập thất bại");
  }
}