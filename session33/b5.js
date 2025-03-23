const products = [
    {
        id: 1,
        name: `Laptop Dell XPS 15`,
        price: 35990000,
        image: `https://thienthanhcomputer.com/wp-content/uploads/2024/06/s-l1600-7.webp`,
        description: `Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.`,
    },
    {
        id: 2,
        name: `Iphone 15 Pro Max`,
        price: 32990000,
        image: `https://vcdn1-vnexpress.vnecdn.net/2024/03/11/1710136228623-1710136229-1710144432.png?w=180&h=180&q=100&dpr=1&fit=crop&s=CGzImFhoi1fevrp4t3qZ0Q`,
        description: `Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.`,
    },
    {
        id: 3,
        name: `Samsung Galaxy S24 Ultra`,
        price: 28990000,
        image: `https://phongvu.vn/cong-nghe/wp-content/uploads/2024/02/Danh-gia-Tren-tay-Samsung-Galaxy-S24-Ultra-4.jpg`,
        description: `Điện thoại Android mạnh mẽ với bút S-pen và camera siêu zoom.`,
    },
    {
        id: 4,
        name: `Tai nghe Sony WH-1000XMS`,
        price: 7990000,
        image: `https://tainghechinhhang.vn/wp-content/uploads/2024/04/Sony-WH-1000XM5-3.jpg`,
        description: `Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.`,
    },
    {
        id: 5,
        name: `Apple Watch Series 9`,
        price: 11990000,
        image: `https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/tile/Apple-Watch-S9-hero-230912.jpg.archive.jpg`,
        description: `Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.`,
    },
    {
        id: 6,
        name: `Loa JBL Charge 5`,
        price: 3990000,
        image: `https://down-vn.img.susercontent.com/file/c6b02ab9ae6cac644b4577ac9760940f`,
        description: `Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.`,
    },
]
const bieuMau = document.getElementById('bieuMau');
let search = document.getElementById("searchProduct").onclick = function () {
    let choice = document.getElementById("search").value;
    if (choice.toLowerCase() === "smartphone") {
        bieuMau.innerHTML = "";
        const smartphones = products.filter(product => product.id === 2 || product.id === 3);
        smartphones.forEach(product => {
            const cardHTML = `
                <div class="card col-2" style="width: 18rem;">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-money">${product.price.toLocaleString('vi-VN')} VNĐ</p>
                        <div><a href="#" class="btn btn-primary">Mua ngay</a></div>
                    </div>
                </div>
            `;
            bieuMau.innerHTML += cardHTML;
        });
    }else if(choice.toLowerCase()==="laptop"){
        bieuMau.innerHTML = "";
        const laptops = products.filter(product => product.id === 1);
        laptops.forEach(product => {
            const cardHTML = `
                <div class="card col-2" style="width: 18rem;">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-money">${product.price.toLocaleString('vi-VN')} VNĐ</p>
                        <div><a href="#" class="btn btn-primary">Mua ngay</a></div>
                    </div>
                </div>
            `;
            bieuMau.innerHTML += cardHTML;
        });
    }else if(choice.toLowerCase()==="apple watch"){
        
    }
};
function hienBang(){
    
}