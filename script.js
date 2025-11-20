let list = [];

function addToList(item) {
    list.push(item);
}

function displayList() {
    alert("Current List Items:\n" + list.join("\n"));
}