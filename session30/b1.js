let products = [
  {
    id: 1,
    name: "mèn mén",
    price: 20000,
    quantity: 20,
    category: "món ăn dân tộc Mông",
  },
  {
    id: 2,
    name: "mứt",
    price: 80000,
    quantity: 21,
    category: "món ăn dân tộc Kinh",
  },
  {
    id: 3,
    name: "cơm lam",
    price: 40000,
    quantity: 15,
    category: "món ăn dân tộc Mông",
  },
  {
    id: 4,
    name: "bánh đậu xanh",
    price: 60000,
    quantity: 30,
    category: "món ăn dân tộc Kinh",
  },
];
let menu = `
-------------------Menu----------------
1. Hiển thị các sản phẩm theo tên danh mục.
2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
3. Sắp xếp các sản phẩm trong cửa hàng theo giá
4. Tính số tiền thanh toán trong giỏ hàng.
5. Thoát.
---------------------------------------
Mời nhập lựa chọn của bạn:
`;
let cart = [];
let choice;
while (choice !== 5) {
  choice = +prompt(menu);
  switch (choice) {
    case 1:
      //Hiển thị các sản phẩm theo tên danh mục.
      console.clear();
      displayProduct();
      break;
    case 2:
      //Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
      //   a. Sản phẩm không có trong cửa hàng hiển thị thông báo.
      //   b. Sản phẩm có trong cửa hàng
      //   i. Cho người dùng nhập số lượng sản phẩm muốn mua, mua thành công số lượng sản phẩm trong cửa hàng sẽ bị trừ đi.
      //   ii. Số lượng sản phẩm trong cửa hàng = 0 hoặc không đủ hiển thị thông báo.
      console.clear();
      displayProduct();
      let findId = +prompt("Nhập Id sản phẩm muốn mua");
      let foundId = -1;
      for (let index in products) {
        if (products[index].id === findId) {
          foundId = index;
          break;
        }
      }
      if (foundId === -1) {
        alert("Sản phẩm không có trong cửa hàng");
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
          }
          cart.push(arrNew)
        }
      }
      break;
    case 3:
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
    case 4:
      //Tính số tiền thanh toán trong giỏ hàng.
      console.clear();
      let sum= 0;
      if (cart.length === 0){
        console.log("Chưa thêm sản phẩm nào!");
        break;
      }
      console.log("+++++++++++++++++> Sản Phẩm Đã Thêm <+++++++++++++++++" )
      for (let i in cart){
        console.log("Món Ăn Số " + (+i + 1));
        console.log(`ID: ${cart[i].id}`);
        console.log(`Name: ${cart[i].name}`);
        console.log(`Price: ${cart[i].price}`);
        console.log(`Quantity: ${cart[i].quantity}`);
        console.log(`Category: ${cart[i].category}`);
        console.log("--------------------------------------------------");
        sum += cart[i].quantity * cart[i].price;
      }
      alert("Tổng Tiền Cần Thanh Toán Là:  " +sum+ "VNĐ.")
      break;
    case 5:
      console.clear();
      alert("Cảm ơn đã sử dụng dịch vụ của chúng tôi!");
      break;
    default:
      alert("Lựa chọn không hợp lệ!");
      break;
  }
}
function displayProduct() {
  console.log("++++++++++++++++++++> Menu Quán Ăn <++++++++++++++++++++");
  for (let i in products) {
    console.log("Món Ăn Số " + (+i + 1));
    console.log(`ID: ${products[i].id}`);
    console.log(`Name: ${products[i].name}`);
    console.log(`Price: ${products[i].price}`);
    console.log(`Quantity: ${products[i].quantity}`);
    console.log(`Category: ${products[i].category}`);
    console.log("--------------------------------------------------");
  }
}
function displayOneProduct(products, i) {
  console.log("Món Ăn Số " + (+i + 1));
  console.log(`ID: ${products.id}`);
  console.log(`Name: ${products.name}`);
  console.log(`Price: ${products.price}`);
  console.log(`Quantity: ${products.quantity}`);
  console.log(`Category: ${products.category}`);
  console.log("--------------------------------------------------");
}
