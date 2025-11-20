function toggleDarkMode() {
    document.body.classList.toggle("darkmode");
}

document.getElementById("changeMode").addEventListener("click", toggleDarkMode);