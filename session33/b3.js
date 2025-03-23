let dish = [ 
    { name: "Rau sạch", category: "Đồ ăn" }, 
    { name: "Thịt lợn", category: "Đồ ăn" }, 
    { name: "Pepsi không calo", category: "Nước" }, 
    { name: "Cocacola", category: "Nước" }, 
    { name: "Cờ lê", category: "Dụng cụ" }, 
    { name: "Tuy vít", category: "Dụng cụ" }, 
];

    
let select = document.getElementById("select");
let list = document.getElementById("list");
document.getElementById("btn").onclick = function () {
    list.innerHTML = "";
    for (let i in dish) {
        if (select.value === dish[i].category || select.value === "") { 
            let li = document.createElement("li");
            li.innerHTML = dish[i].name;
            list.appendChild(li);
        }
    }
    
};
