let list = [];

function addToList() {
    const itemInput = document.getElementById("itemInput");
    const item = itemInput.value.trim();
    if (item === "") {
        alert("Please enter a valid item.");
        return;
    }
    itemInput.value = "";
    list.push(item);
}

function displayList() {
    alert("Current List Items:\n" + list.join("\n"));
}