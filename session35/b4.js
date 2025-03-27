let employees = JSON.parse(localStorage.getItem("employees")) || [];
let name = document.getElementById("name");
let position = document.getElementById("position");
let list = document.getElementById("list");
function displayList() {
    list.innerHTML = "";
    employees.forEach((employee, index) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${employee.name}</td>
            <td>${employee.position}</td>
        `;
      list.appendChild(tr);
    });
    localStorage.setItem("employees", JSON.stringify(employees));
}

document.getElementById("add").addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let position = document.getElementById("position").value;
    let employee = {
        name: name,
        position: position,
    };
    name.value = "";
    position.value = "";
    employees.push(employee);
    displayList();
});
displayList();