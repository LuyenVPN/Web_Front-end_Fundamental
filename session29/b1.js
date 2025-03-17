const Contact = [
  {
    id: 1,
    name: "Phạm Thoại",
    email: "16ty@gmail.com",
    phone: "0987654321",
  },
  {
    id: 2,
    name: "Mẹ Bé Bắp",
    email: "hoptac16@gmail.com",
    phone: "0123456789",
  },
  {
    id: 3,
    name: "Cộng Đồng Mạng",
    email: "bidatmui@gmail.com",
    phone: "0432156789",
  },
];
let menu = `
---------------------Menu-------------------------
1. Thêm đối tượng Contact vào danh sách liên hệ.
2. Hiển thị danh sách danh bạ.
3. Tìm kiếm thông tin Contact theo số điện thoại.
4. Cập nhật thông tin Contact(name, email, phone) theo id.
5. Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
6. Thoát.
--------------------------------------------------
Mời Nhập lựa Chọn Của Bạn:
`;
let choice;
while (choice !== 6) {
  choice = +prompt(menu);
  switch (choice) {
    case 1:
      // Thêm đối tượng Contact vào danh sách liên hệ.
      let name = prompt("Mời bạn nhập tên:");
      let email = prompt("Mời bạn nhập email:");
      let phone = prompt("Mời bạn nhập số điện thoại:");
      let newContact = {
        id: Math.ceil(Math.random() * 10000),
        name: name,
        email: email,
        phone: phone,
      };
      Contact.push(newContact);
      break;
    case 2:
      // Hiển thị danh sách danh bạ.
      displayContact();
      break;
    case 3:
      // Tìm kiếm thông tin Contact theo số điện thoại.
      let searchPhone = prompt("Mời bạn nhập số điện thoại cần tìm:");
      let findPhone = -1;
      for (let i in Contact) {
        if (Contact[i].phone === searchPhone) {
          findPhone = i;
          break;
        }
      }
      if (findPhone === -1) {
        console.log("Không Tìm Thấy Số Điện Thoại Cần Tìm!");
      } else {
        displayOneContact(Contact[findPhone], findPhone);
      }
      break;
    case 4:
      // Cập nhật thông tin Contact(name, email, phone) theo id.
      let searchId = +prompt("Mời bạn nhập ID cần cập nhật:");
      let findId = -1;
      for (let i in Contact) {
        if (Contact[i].id === searchId) {
          findId = i;
          break;
        }
      }
      if (findId === -1) {
        console.log("Không Tìm Thấy ID Cần Tìm!");
      } else {
        let newName = prompt("Mời bạn nhập tên mới:");
        let newEmail = prompt("Mời bạn nhập email mới:");
        let newPhone = prompt("Mời bạn nhập số điện thoại mới:");
        Contact[findId].name = newName;
        Contact[findId].email = newEmail;
        Contact[findId].phone = newPhone;
      }
      break;
    case 5:
      // Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
      let deleteId = +prompt("Mời bạn nhập ID cần xóa:");
      let deleteIndex = -1;
      for (let i in Contact) {
        if (Contact[i].id === deleteId) {
          deleteIndex = i;
          break;
        }
      }
      if (deleteIndex === -1) {
        console.log("Không Tìm Thấy ID Cần Xóa!");
      } else {
        Contact.splice(+(deleteIndex), 1);

      }
      break;
    case 6:
      // Thoát.
      alert("Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi!");
      break;
    default:
      alert("Lựa chọn không hợp lệ. Mời chọn lại!");
      break;
  }
}
function displayContact() {
  for (let i in Contact) {
    console.log("Danh Bạ Số " + (+i + 1));
    console.log(`ID: ${Contact[i].id}`);
    console.log(`Name: ${Contact[i].name}`);
    console.log(`Email: ${Contact[i].email}`);
    console.log(`Phone: ${Contact[i].phone}`);
    console.log("--------------------------------------------------");
  }
}
function displayOneContact(Contact, i) {
  console.log("Danh Bạ Số " + (+i + 1));
  console.log(`ID: ${Contact.id}`);
  console.log(`Name: ${Contact.name}`);
  console.log(`Email: ${Contact.email}`);
  console.log(`Phone: ${Contact.phone}`);
  console.log("--------------------------------------------------");
}
