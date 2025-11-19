function sayHello() {
  alert("Hello from the external file!");
}

function sayGoodbye() {
    alert("Goodbye from the external file!");
}

// Connect the function to the button
let btn = document.getElementById("helloBtn");
btn.addEventListener("click", sayHello);

let goodbyeBtn = document.getElementById("goodbyeBtn");
goodbyeBtn.addEventListener("click", sayGoodbye);