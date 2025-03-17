const library = [
  {
    id: 1,
    title: "1 Tỷ Gói Mè",
    author: "Bịp",
    price: 100,
    year: 2021,
    isAvailable: true,
  },
  {
    id: 2,
    title: "Bé Bắp",
    author: "Phạm Thoại",
    price: 20,
    year: 2025,
    isAvailable: true,
  },
  {
    id: 3,
    title: "Đút Lót",
    author: "Lòng Người",
    price: 90,
    year: 2023,
    isAvailable: true,
  },
];
let menu = `
---------------------Menu-------------------------
1. Thêm sách mới.
2. Hiển thị danh sách sách.
3. Tìm kiếm sách theo tiêu đề.
4. Cập nhật trạng thái mượn/trả sách theo id sách.
5. Xóa sách theo id sách ra khỏi danh sách.
6. Sắp xếp sách theo giá tăng dần.
7. Thoát.
--------------------------------------------------
Mời Nhập lựa Chọn Của Bạn:
`;
let input = 0;
while (input !== 7) {
  input = +prompt(menu);
  switch (input) {
    case 1:
      // Thêm Sách mới
      let title = prompt("Mời Bạn Nhập vào tiêu đề:");
      let author = prompt("Mời Bạn Nhập vào tác giả:");
      let price = prompt("Mời Bạn Nhập vào giá:");
      let year = prompt("Mời Bạn Nhập vào năm xuất bản:");
      let isAvailable = prompt("Mời Bạn Nhập vào trạng thái mượn/trả sách:");
      let newBook = {
        id: Math.ceil(Math.random() * 10000),
        title: title,
        author: author,
        price: price,
        year: year,
        isAvailable: isAvailable,
      };
      library.push(newBook);
      break;
    case 2:
      // Hiển thị danh sách sách
      displayBook();
      break;
    case 3:
      // Tìm kiếm sách theo tiêu đề
      let searchTitle = prompt("Mời Bạn Nhập vào tiêu đề sách cần tìm:");
      let findIndex = -1;
      for (let index in library) {
        if (library[index].title === searchTitle) {
          findIndex = index;
        }
      }
      if (findIndex === -1) {
        console.log("Không Tìm Thấy Sách Cần Tìm!");
      } else {
        displayOneBook(library[findIndex], findIndex);
      }
      break;
    case 4:
      // Cập nhật trạng thái mượn/trả sách theo id sách
      let searchId = +prompt("Mời Bạn Nhập vào ID sách cần cập nhật:");
      let upadateIndex = -1;
      for (let index in library) {
        if (library[index].id === searchId) {
          upadateIndex = index;
          break;
        }
      }
      if (upadateIndex === -1) {
        console.log("Không Tìm Thấy Sách Cần Cập Nhật!");
      } else {
        library[upadateIndex].isAvailable = !library[upadateIndex].isAvailable;
      }
      break;
    case 5:
      // Xóa sách theo id sách ra khỏi danh sách
      let deleteId = +prompt("Mời Bạn Nhập vào ID sách cần xóa:");
      let deleteIndex = -1;
      for (let index in library) {
        if (library[index].id === deleteId) {
          deleteIndex = index;
          break;
        }
      }
      if (deleteIndex === -1) {
        console.log("Không Tìm Thấy Sách Cần Xóa!");    
        } else {
        library.splice(deleteIndex, 1);
        }
      break;
    case 6:
      // Sắp xếp sách theo giá tăng
      library.sort((a, b) => a.price - b.price);
      break;
    case 7:
      // Thoát
      alert("Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi!");
      break;
    default:
      // Lựa chọn không hợp lệ
      alert("Lựa chọn không hợp lệ!");
      break;
  }
}
function displayBook() {
  for (let i in library) {
    console.log("Quyển Sách Số " + (+i + 1));
    console.log("ID: " + library[i].id);
    console.log("Tiêu Đề: " + library[i].title);
    console.log("Tác Giả: " + library[i].author);
    console.log("Giá: " + library[i].price);
    console.log("Năm Xuất Bản: " + library[i].year);
    console.log("Trạng Thái Mượn/Trả Sách: " + library[i].isAvailable);
    console.log("--------------------------------------------------");
  }
}
function displayOneBook( book, index) {
      console.log("Quyển Sách Số " + (+index + 1));
      console.log("ID: " + book.id);
      console.log("Tiêu Đề: " + book.title);
      console.log("Tác Giả: " + book.author);
      console.log("Giá: " + book.price);
      console.log("Năm Xuất Bản: " + book.year);
      console.log("Trạng Thái Mượn/Trả Sách: " + book.isAvailable);
      console.log("--------------------------------------------------");
  }
  