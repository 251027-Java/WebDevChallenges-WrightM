function changeColor() {
    let color = document.body.style.backgroundColor;
    if (color === 'lightblue') {
        document.body.style.backgroundColor = 'white';
    } else {
        document.body.style.backgroundColor = 'lightblue';
    }
}

document.getElementById("changeColor").addEventListener("click", changeColor);