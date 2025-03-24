document.getElementById("login-btn").addEventListener("click", function () {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    if (!email || !password) {
        alert("Email và mật khẩu không được để trống!");
        return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find(user => user.email === email && user.password === password);

    if (!validUser) {
        alert("Email hoặc mật khẩu không chính xác!");
        return;
    }
    sessionStorage.setItem("loggedInUser", JSON.stringify(validUser));

    alert("Đăng nhập thành công!");
    window.location.href = "home.html"; 
});
