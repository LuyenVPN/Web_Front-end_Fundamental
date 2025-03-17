const product = [
  {
    id: 1,
    name: "Gà Rán",
    price: 100,
    category: "Đồ Ăn",
    quantity: 10,
  },
  {
    id: 2,
    name: "Coca",
    price: 10,
    category: "Đồ Uống",
    quantity: 50,
  },
  {
    id: 3,
    name: "Áo Cọc",
    price: 250,
    category: "Quần Áo",
    quantity: 35,
  },
];
let menu = `
  ---------------------Menu-------------------------
  1. Thêm sản phẩm vào danh sách sản phẩm.
  2. Hiển thị tất cả sản phẩm.
  3. Hiển thị chi tiết sản phẩm theo id.
  4. Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
  5. Xóa sản phẩm theo id.
  6. Lọc sản phẩm theo khoảng giá.
  7. Thoát.
  --------------------------------------------------
  Mời Nhập lựa Chọn Của Bạn:
  `;
let choice;
while (choice !== 7) {
  choice = +prompt(menu);
  switch (choice) {
    case 1:
      // Thêm sản phẩm vào danh sách sản phẩm.
      let name = prompt("Mời bạn nhập tên:");
      let price = prompt("Mời bạn nhập giá tiền:");
      let category = prompt("Mời bạn nhập thể loại:");
      let quantity = prompt("Mời bạn nhập số lượng:");
      let newProduct = {
        id: Math.ceil(Math.random() * 10000),
        name: name,
        price: price,
        category: category,
        quantity: quantity,
      };
      product.push(newProduct);
      break;
    case 2:
      // Hiển thị tất cả sản phẩm.
      displayProduct();
      break;
    case 3:
      // Hiển thị chi tiết sản phẩm theo id.
      let idProduct = +prompt("Mời bạn nhập số điện thoại cần tìm:");
      let idFind = -1;
      for (let i in product) {
        if (product[i].id === idProduct) {
          idFind = i;
          break;
        }
      }
      if (idFind === -1) {
        console.log("Không Tìm Thấy ID Cần Tìm!");
      } else {
        displayOneProduct(product[idFind], idFind);
      }
      break;
    case 4:
      // Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
      let searchId = +prompt("Mời bạn nhập ID cần cập nhật:");
      let findId = -1;
      for (let i in product) {
        if (product[i].id === searchId) {
          findId = i;
          break;
        }
      }
      if (findId === -1) {
        console.log("Không Tìm Thấy ID Cần Tìm!");
      } else {
        let nameNew = prompt("Mời bạn nhập tên:");
        let priceNew = prompt("Mời bạn nhập giá tiền:");
        let categoryNew = prompt("Mời bạn nhập thể loại:");
        let quantityNew = prompt("Mời bạn nhập số lượng:");
        product[findId].name = nameNew;
        product[findId].price = priceNew;
        product[findId].category = categoryNew;
        product[findId].quantity = quantityNew;
      }
      break;
    case 5:
      // Xóa sản phẩm theo id.
      let deleteId = +prompt("Mời bạn nhập ID cần xóa:");
      let deleteIndex = -1;
      for (let i in product) {
        if (product[i].id === deleteId) {
          deleteIndex = i;
          break;
        }
      }
      if (deleteIndex === -1) {
        console.log("Không Tìm Thấy ID Cần Xóa!");
      } else {
        product.splice(+deleteIndex, 1);
      }
      break;
    case 6:
      // Lọc sản phẩm theo khoảng giá.
      let start = +prompt("Nhập khoảng giá từ:");
      let end = +prompt("Nhập khoảng giá đến:");
      let output = [];

      for (let i = 0; i < product.length; i++) {
        if (product[i].price >= start && product[i].price <= end) {
          output.push(product[i]);
        }
      }

      if (output.length === 0) {
        console.log("Không có sản phẩm nào trong khoảng giá này.");
      } else {
        console.log("Các sản phẩm trong khoảng giá:");
        for (let i = 0; i < output.length; i++) {
          console.log(`Sản phẩm ${i + 1}:`);
          console.log(`ID: ${output[i].id}`);
          console.log(`Name: ${output[i].name}`);
          console.log(`Price: ${output[i].price}`);
          console.log(`Category: ${output[i].category}`);
          console.log(`Quantity: ${output[i].quantity}`);
          console.log("-----------------------------------");
        }
      }
      break;
    case 7:
      // Thoát.
      alert("Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi!");
      break;
    default:
      alert("Lựa chọn không hợp lệ. Mời chọn lại!");
      break;
  }
}
function displayProduct() {
  for (let i in product) {
    console.log("Sản phẩm Số " + (+i + 1));
    console.log(`ID: ${product[i].id}`);
    console.log(`Name: ${product[i].name}`);
    console.log(`Pirce: ${product[i].price}`);
    console.log(`Catygory: ${product[i].category}`);
    console.log(`Quantity: ${product[i].quantity}`);
    console.log("--------------------------------------------------");
  }
}
function displayOneProduct(product, i) {
  console.log("Sản phẩm số " + (+i + 1));
  console.log(`ID: ${product.id}`);
  console.log(`Name: ${product.name}`);
  console.log(`Price: ${product.price}`);
  console.log(`Category: ${product.category}`);
  console.log(`Quantity: ${product.quantity}`);
  console.log("--------------------------------------------------");
}
