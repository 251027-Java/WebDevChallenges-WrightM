function addToList() {
    let ul = document.getElementById("mainList");
    let li = document.createElement("li");
    li.textContent = "New Item";
    ul.appendChild(li);
}

document.getElementById("addToList").addEventListener("click", addToList);