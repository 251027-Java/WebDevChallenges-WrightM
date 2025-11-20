let input = document.getElementById("taskInput");
let button = document.getElementById("addTask");
let list = document.getElementById("taskList");

button.addEventListener("click", function() {
  let taskText = input.value.trim();
  if (taskText === "") return;

  let li = document.createElement("li");
  let ch = document.createElement("input");
  ch.type = "checkbox";
  li.appendChild(ch);
  li.appendChild(document.createTextNode(taskText + " "));

  li.addEventListener("change", function() {
    li.classList.toggle("done");
  });

  list.appendChild(li);
  input.value = "";
});