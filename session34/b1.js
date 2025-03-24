let email = document.getElementById('email');
let password = document.getElementById('password');
let confirm = document.getElementById('confirm-password');
document.getElementById('btn').onclick = function () {
    if (email.value === '' || password.value === '' || confirm.value === '') {
        alert('Dữ Liệu không được để trống');
        return;
    }
    if (password.value !== confirm.value) {
        alert('Mật khẩu không khớp');
        return;
    }
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let emailExists = users.some(user => user.email === email.value);
    if (emailExists) {
        alert('Email đã tồn tại, vui lòng dùng email khác!');
        return;
    }
    users.push({ email: email.value, password: password.value });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Đăng ký thành công!');
    email.value = '';
    password.value = '';
    confirm.value = '';
};
