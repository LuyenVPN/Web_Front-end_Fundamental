let products = [
  {
    id: 1,
    name: "Phạm Thoại",
    price: 2000,
    quantity: 20,
    category: "16 tỷ",
  },
  {
    id: 2,
    name: "Bé Bắp",
    price: 1000,
    quantity: 21,
    category: "16 tỷ",
  },
  {
    id: 3,
    name: "Mẹ Bé Bắp",
    price: 19000,
    quantity: 15,
    category: "16 tỷ",
  },
  {
    id: 4,
    name: "Cộng dồng mạng",
    price: 20000,
    quantity: 30,
    category: "Bị Dắt Mũi",
  },
];
let menu = `
  -------------------Menu----------------
  1. Hiển thị danh sách sách theo thể loại.
  2. Thêm sách mới vào kho
  3. Tìm kiếm sách theo tên hoặc id.
  4. Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho).
  5. Sắp xếp sách theo giá
  6. Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
  7. Hiển thị tổng số lượng sách trong kho.
  8. Thoát chương trình.
  ---------------------------------------
  Mời nhập lựa chọn của bạn:
  `;
let cart = [];
let choice;
while (choice !== 8) {
  choice = +prompt(menu);
  switch (choice) {
    case 1:
      // Hiển thị danh sách sách theo thể loại (Người dùng chọn thể loại để xem sách trong danh mục đó).
      console.clear();
      let search = prompt("Nhập thể loại muốn tìm kiếm:");
      let found = -1;
      console.log(
        "++++++++++++++++++++> Danh Sách Sách Theo Thể Loại <++++++++++++++++++++"
      );
      for (let i in products) {
        if (products[i].category === search) {
          found = 1;
          console.log("Sách Số " + (+i + 1));
          console.log(`ID: ${products[i].id}`);
          console.log(`Name: ${products[i].name}`);
          console.log(`Price: ${products[i].price}`);
          console.log(`Quantity: ${products[i].quantity}`);
          console.log(`Category: ${products[i].category}`);
          console.log("--------------------------------------------------");
        }
      }
      if (found === -1) {
        console.log("Không Có Thể Loại Này!");
      }
      break;
    case 2:
      let name = prompt("Mời Bạn Nhập vào tên sách:");
      let price = +prompt("Mời Bạn Nhập vào giá:");
      let quantity = +prompt("Mời Bạn Nhập vào số lượng:");
      let category = prompt("Mời Bạn Nhập vào thể loại:");
      let newBook = {
        id: Math.ceil(Math.random() * 10000),
        name: name,
        price: price,
        quantity: quantity,
        category: category,
      };
      products.push(newBook);
      break;
    case 3:
      //Tìm kiếm sách theo tên hoặc id.
      console.clear();
      let find = prompt("Nhập Id hoặc Tên Sách: ");
      let foundSearch = -1;
      for (let index in products) {
        if (
          products[index].id === +find ||
          products[index].name.toLowerCase() === find.toLowerCase()
        ) {
          foundSearch = index;
          break;
        }
      }
      if (foundSearch === -1) {
        alert("Sách không có trong cửa hàng");
      } else {
        console.log("+++++++++++++++> Sách Cần Tìm <++++++++++++++")
        displayOneProduct(products[foundSearch],foundSearch)
      }
      break;
    case 4:
      //Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho).
      console.clear();
      displayProduct();
      let findId = +prompt("Nhập Id Sách Cần Mua: ");
      let foundId = -1;
      for (let index in products) {
        if (products[index].id === findId) {
          foundId = index;
          break;
        }
      }
      if (foundId === -1) {
        alert("Sách không có trong cửa hàng");
      } else {
        console.clear();
        displayOneProduct(products[foundId], foundId);
        if (products[foundId].quantity === 0) {
          alert("Cửa hàng Đã Hết Sản Phẩm!");
          break;
        }
        let number = +prompt("Nhập số lượng muốn mua:");
        if (number > products[foundId].quantity || isNaN(number)) {
          alert("Số lượng không hợp lệ");
        } else {
          products[foundId].quantity -= number;
          alert("Đã thêm sản phẩm thành công");
          let arrNew = {
            id: products[foundId].id,
            name: products[foundId].name,
            price: products[foundId].price,
            quantity: number,
            category: products[foundId].category,
          };
          cart.push(arrNew);
        }
      }
      break;
    case 5:
      // Sắp xếp các sản phẩm trong cửa hàng theo giá:
      console.clear();
      let menucon = `
        Sắp xếp các sản phẩm trong cửa hàng theo giá:
          a. Tăng dần.
          b. Giảm dần.
        Mời Nhập Lựa Chọn:
          `;
      let choicecon = prompt(menucon);
      if (choicecon === "a") {
        // Sắp xếp tăng dần
        products.sort((a, b) => a.price - b.price);
        console.log("Danh sách sản phẩm sau khi sắp xếp tăng dần:");
        displayProduct();
      } else if (choicecon === "b") {
        // Sắp xếp giảm dần
        products.sort((a, b) => b.price - a.price);
        console.log("Danh sách sản phẩm sau khi sắp xếp giảm dần:");
        displayProduct();
      } else {
        alert("Lựa chọn Không Hợp Lệ");
      }
      break;
    case 6:
      //Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng.
      console.clear();
      let sum = 0;
      if (cart.length === 0) {
        console.log("Chưa thêm sản phẩm nào!");
        break;
      }
      console.log("+++++++++++++++++> Sách Đã Thêm <+++++++++++++++++");
      for (let i in cart) {
        console.log("Món Ăn Số " + (+i + 1));
        console.log(`ID: ${cart[i].id}`);
        console.log(`Name: ${cart[i].name}`);
        console.log(`Price: ${cart[i].price}`);
        console.log(`Quantity: ${cart[i].quantity}`);
        console.log(`Category: ${cart[i].category}`);
        console.log("--------------------------------------------------");
        sum += cart[i].quantity * cart[i].price;
      }
      alert("Tổng Tiền Cần Thanh Toán Là:  " + sum + "VNĐ.");
      break;
    case 7:
      //Hiển thị tổng số lượng sách trong kho.
      displayProduct();
      let sumbook = 0;
      for (let index in products) {
        sumbook += products[index].quantity;
      }
      alert("Tổng số lượng sách là: " + sumbook);
    case 8:
      console.clear();
      alert("Cảm ơn đã sử dụng dịch vụ của chúng tôi!");
      break;
    default:
      alert("Lựa chọn không hợp lệ!");
      break;
  }
}
function displayProduct() {
  console.log("++++++++++++++++++++> Tất cả Sách <++++++++++++++++++++");
  for (let i in products) {
    console.log("Sách Số " + (+i + 1));
    console.log(`ID: ${products[i].id}`);
    console.log(`Name: ${products[i].name}`);
    console.log(`Price: ${products[i].price}`);
    console.log(`Quantity: ${products[i].quantity}`);
    console.log(`Category: ${products[i].category}`);
    console.log("--------------------------------------------------");
  }
}
function displayOneProduct(products, i) {
  console.log("Sách Số " + (+i + 1));
  console.log(`ID: ${products.id}`);
  console.log(`Name: ${products.name}`);
  console.log(`Price: ${products.price}`);
  console.log(`Quantity: ${products.quantity}`);
  console.log(`Category: ${products.category}`);
  console.log("--------------------------------------------------");
}
