const url = "https://jsonplaceholder.typicode.com/posts/";

function loadContent() {
    const id = document.getElementById('postId').value;
    fetch(url + id)
    .then(response => response.json())
    .then(data => {
        
        document.getElementById("output").innerHTML = `<h3>${data.title}</h3><p>${data.body}</p>`;
    })
    .catch(error => console.error("Error when fetching data:", error));
};

document.getElementById("fetchBtn").addEventListener("click", loadContent);