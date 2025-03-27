const container = document.getElementById("container");
const addBookmarkForm = document.getElementById("addbookmark");
const exitButton = document.getElementById("exit");
const save = document.getElementById("save");
const list = document.getElementById("list");
container.addEventListener("click", () => {
  addBookmarkForm.style.display = "block";
});
exitButton.addEventListener("click", () => {
  addBookmarkForm.style.display = "none";
});
save.addEventListener("click", () => {
  addBookmarkForm.style.display = "none";
});
let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
function displayList() {
    list.innerHTML = "";
    bookmarks.forEach((bookmarks, index) => {
      let li = document.createElement("li");
      li.innerHTML = `<span><a href="${bookmarks.url}">${bookmarks.name}</a></span>
          <div> 
              <button class="delete" onclick="deleteBookmark(${index})">X</button> 
          </div>`;
      list.appendChild(li);
    });
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
};
save.addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let url = document.getElementById("url").value;
    let addbookmark = {
        name: name,
        url: url,
    };
    name.value = "";
    url.value = "";
    bookmarks.push(addbookmark);
    displayList();
  }
);
function deleteBookmark(index) {
    bookmarks.splice(index, 1);
    displayList();
  }
displayList();