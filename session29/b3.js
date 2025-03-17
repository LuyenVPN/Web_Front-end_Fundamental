const menu = {
    "Món Khai Vị": [
      { name: "Gỏi Chấm", price: 50000, description: "Siêu ngon" },
      { name: "Chả Giò", price: 40000, description: "Giòn thơm ngon." },
    ],
    "Món Chính": [
      { name: "Bò Cô Bê", price: 120000, description: "Đậm vị sang chảnh " },
      { name: "Cơm Chiên", price: 50000, description: "Ngon." },
    ],
    "Món Tráng Miệng": [
      { name: "Kem", price: 5000, description: "Mát lạnh"},
      { name: "Bánh Flan", price: 15000, description: "Mềm mịn thơm ngon" },
    ],
  };
  
  let choice;
  while (choice !== 6) {
    choice = +prompt(`
  --------------------- MENU NHÀ HÀNG ---------------------
  1. Thêm món ăn vào danh mục.
  2. Xóa món ăn theo tên.
  3. Cập nhật thông tin món ăn theo tên.
  4. Hiển thị toàn bộ menu.
  5. Tìm kiếm món ăn theo tên.
  6. Thoát.
  --------------------------------------------------------
  Mời bạn chọn chức năng:
    `);
  
    switch (choice) {
      case 1:
        // Thêm món ăn vào danh mục
        let category = prompt("Nhập danh mục món ăn:");
        let name = prompt("Nhập tên món ăn:");
        let price = +prompt("Nhập giá món ăn:");
        let description = prompt("Nhập mô tả món ăn:");
        if (!menu[category]) {
            menu[category] = [];
        }
        let newMenu = {
            id: Math.ceil(Math.random() * 10000),
            name: name,
            price: price,
            category: category,
            description: description,
          };
          menu[category].push(newMenu);
          break;
  
      case 2:
        //  Xóa món ăn theo tên
        let deleteName = prompt("Nhập tên món ăn cần xóa:");
        let foundDelete = -1;
        let deleteCategory = 0;
        
        for (let category in menu) {
          for (let i in menu[category]) {
            if (menu[category][i].name.toLowerCase() === deleteName.toLowerCase()) {
              foundDelete = i;
              deleteCategory = category;
              break; 
            }
          }
        }
        if (foundDelete === -1) {
          alert("Không tìm thấy món ăn cần xóa!");
        } else {
          menu[deleteCategory].splice(foundDelete, 1);
        }        
        break;
      case 3:
        // Cập nhật thông tin món ăn theo tên
        let findName = prompt("Nhập tên món ăn cần cập nhật:");
        let foundName = -1;
        let foundCategory = 0;
        
        for (let category in menu) {
          for (let i in menu[category]) {
            if (menu[category][i].name.toLowerCase() === findName.toLowerCase()) {
              foundName = i;
              foundCategory = category;
              break; 
            }
          }
        }
        if (foundName === -1) {
          alert("Không tìm thấy món ăn!");
        } else {
            let categoryNew = prompt("Nhập danh mục món ăn:");
        let nameNew = prompt("Nhập tên món ăn:");
        let priceNew = +prompt("Nhập giá món ăn:");
        let descriptionNew = prompt("Nhập mô tả món ăn:");
        menu[foundCategory][foundName].name = nameNew;
        menu[foundCategory][foundName].category = categoryNew;
        menu[foundCategory][foundName].price = priceNew;
        menu[foundCategory][foundName].description = descriptionNew;
        }
        break;
  
      case 4:
        //  Hiển thị toàn bộ menu 
        displayMenu();
        break;
  
      case 5:
        //  Tìm kiếm món ăn theo tên
        let searchName = prompt("Nhập tên món ăn cần tìm:");
        let foundSearch = -1;
        let searchCategory=0;
        for (let category in menu) {
            for (let i in menu[category]) {
              if (menu[category][i].name.toLowerCase() === searchName.toLowerCase()) {
                foundSearch = i;
                searchCategory = category;
                break; 
              }
            }
          }
          if (foundSearch === -1) {
            alert("Không tìm thấy món ăn!");
          } else {
                console.log(" Danh mục: "+searchCategory);
                console.log((+foundSearch + 1) + ". " +menu[searchCategory][foundSearch].name + " - " +menu[searchCategory][foundSearch].price + " - " + menu[searchCategory][foundSearch].description);
            }
        break;
  
      case 6:
        alert("Cảm ơn bạn đã sử dụng hệ thống!");
        break;
  
      default:
        alert("Lựa chọn không hợp lệ, vui lòng thử lại!");
        break;
    }
  }
  
  // Hàm hiển thị toàn bộ menu
  function displayMenu() {
    console.log("------- MENU NHÀ HÀNG -------");
    for (let category in menu) {
        console.log(" Danh mục: "+ category);
      for (let i in menu[category]){
        console.log((+i+1) + ". " +menu[category][i].name + " - " +menu[category][i].price + " - " + menu[category][i].description);
      }
    }
    console.log("-----------------------------");
  }
  