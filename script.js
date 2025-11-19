function changeHeader() {
    document.getElementById("mainHeader").textContent = "You clicked the button!";
}

document.getElementById("changeHeader").addEventListener("click", changeHeader);