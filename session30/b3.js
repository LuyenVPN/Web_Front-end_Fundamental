let products = [
  {
    id: 1,
    name: "Iphone 17 Prm",
    price: 50000,
    quantity: 20,
    company: "Iphone",
  },
  {
    id: 2,
    name: "Samsung Galaxy S26 Ultra",
    price: 35000,
    quantity: 21,
    company: "Samsung",
  },
  {
    id: 3,
    name: "Xiaomi 16 Ultra",
    price: 23000,
    quantity: 15,
    company: "Xiaomi",
  },
  {
    id: 4,
    name: "Realme 12 Ultra",
    price: 17000,
    quantity: 30,
    company: "Realme",
  },
  {
    id: 5,
    name: " IQQ Neo 9 Ultra",
    price: 10000,
    quantity: 18,
    company: "Realme",
  },
];
let menu = `
    -------------------Menu----------------
    1. Hiển thị danh sách điện thoại theo hãng 
    2. Thêm điện thoại mới vào cửa hàng 
    3. Tìm kiếm điện thoại theo tên hoặc id
    4. Mua điện thoại 
    5. Thanh toán tất cả điện thoại trong giỏ hàng 
    6. Sắp xếp điện thoại theo giá:
    7. Hiển thị tổng số tiền của các điện thoại trong kho
    8. Hiển thị tổng số lượng điện thoại theo từng hàng 
    9. Thoát chương trình
    ---------------------------------------
    Mời nhập lựa chọn của bạn:
    `;
let cart = [];
let choice;
while (choice !== 9) {
  choice = +prompt(menu);
  switch (choice) {
    case 1:
      // Hiển thị danh sách điện thoại theo hãng (Ví dụ: Samsung, Apple, Xiaomi…)
      console.clear();
      let search = prompt("Nhập hãng muốn tìm kiếm:");
      let found = -1;
      console.log(
        "++++++++++++++++++++> Danh Sách Điện Thoại Theo Hãncg <++++++++++++++++++++"
      );
      for (let i in products) {
        if (products[i].company === search) {
          found = 1;
          console.log("Điện Thoại Số " + (+i + 1));
          console.log(`ID: ${products[i].id}`);
          console.log(`Name: ${products[i].name}`);
          console.log(`Price: ${products[i].price}`);
          console.log(`Quantity: ${products[i].quantity}`);
          console.log(`Company: ${products[i].company}`);
          console.log("--------------------------------------------------");
        }
      }
      if (found === -1) {
        console.log("Không Có Hãng Này!");
      }
      break;
    case 2:
      let name = prompt("Mời Bạn Nhập vào Tên:");
      let price = +prompt("Mời Bạn Nhập vào giá:");
      let quantity = +prompt("Mời Bạn Nhập vào số lượng:");
      let company = prompt("Mời Bạn Nhập vào hãng:");
      let smartphone = {
        id: Math.ceil(Math.random() * 10000),
        name: name,
        price: price,
        quantity: quantity,
        company: company,
      };
      products.push(smartphone);
      break;
    case 3:
      //Tìm kiếm điện thoại theo tên hoặc id.
      console.clear();
      let find = prompt("Nhập Id hoặc Tên: ");
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
        alert("Điện thoại không có trong cửa hàng");
      } else {
        console.log("+++++++++++++++> Điện Thoại Cần Tìm <++++++++++++++");
        displayOneProduct(products[foundSearch], foundSearch);
      }
      break;
    case 4:
      //Mua điện thoại (Nhập id điện thoại cần mua và số lượng, cập nhật lại cửa hàng).
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
        alert("Điện thoại không có trong cửa hàng");
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
            company: products[foundId].company,
          };
          cart.push(arrNew);
        }
      }
      break;
    case 6:
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
    case 5:
      //Thanh toán tất cả điện thoại trong giỏ hàng.
      console.clear();
      let sum = 0;
      if (cart.length === 0) {
        console.log("Chưa thêm sản phẩm nào!");
        break;
      }
      console.log("+++++++++++++++++> Sách Đã Thêm <+++++++++++++++++");
      for (let i in cart) {
        console.log("Điện Thoại Số " + (+i + 1));
        console.log(`ID: ${cart[i].id}`);
        console.log(`Name: ${cart[i].name}`);
        console.log(`Price: ${cart[i].price}`);
        console.log(`Quantity: ${cart[i].quantity}`);
        console.log(`Company: ${cart[i].company}`);
        console.log("--------------------------------------------------");
        sum += cart[i].quantity * cart[i].price;
      }
      alert("Tổng Tiền Cần Thanh Toán Là:  " + sum + "VNĐ.");
      alert("Thanh toán thành công!");
      cart.splice(0, cart.length);
      break;
      case 8:
        // Hiển thị tổng số lượng điện thoại theo từng hãng
        console.clear();
        let companyTotals = {}; 
        for (let i in products) {
          let company = products[i].company;
          if (companyTotals[company]) {
            companyTotals[company] += products[i].quantity;
          } else {
            companyTotals[company] = products[i].quantity;
          }
        }
  
        console.log("++++++++++++++++++++> Tổng Số Lượng Điện Thoại Theo Từng Hãng <++++++++++++++++++++");
        for (let company in companyTotals) {
          console.log(`${company}: ${companyTotals[company]} chiếc`);
        }
        break;
    case 7:
      //Hiển thị tổng số tiền của các điện thoại trong kho
      displayProduct();
      let sumSmartphone = 0;
      for (let index in products) {
        sumSmartphone += products[index].price * products[index].quantity;
      }
      alert("Tổng số lượng sách là: " + sumSmartphone);
    case 9:
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
    console.log(`Company: ${products[i].company}`);
    console.log("--------------------------------------------------");
  }
}
function displayOneProduct(products, i) {
  console.log("Sách Số " + (+i + 1));
  console.log(`ID: ${products.id}`);
  console.log(`Name: ${products.name}`);
  console.log(`Price: ${products.price}`);
  console.log(`Quantity: ${products.quantity}`);
  console.log(`Company: ${products.company}`);
  console.log("--------------------------------------------------");
}
