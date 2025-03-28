let form = document.getElementById('form');
        let result = document.getElementById('result'); 
        let nameInput = document.getElementById('name'); 
        let outputName = document.getElementById('outputName'); 
        let saveBtn = document.getElementById('save-btn'); 
        let editBtn = document.getElementById('edit-btn'); 

        let savedName = localStorage.getItem("username");
        if (savedName) {
            outputName.textContent = savedName;
            result.style.display = 'block';
            form.style.display = 'none';
        }
        saveBtn.onclick = function() {
            let nameValue = nameInput.value.trim();
            if (nameValue === "") {
                alert("Tên không được để trống!");
                return;
            }
            localStorage.setItem("username",  nameValue);
            outputName.textContent = nameValue;
            result.style.display = 'block';
            form.style.display = 'none';
        };

        
        editBtn.onclick = function() {
            localStorage.removeItem("username");
            result.style.display = 'none';
            form.style.display = 'block';
            nameInput.value = ""; 
        };