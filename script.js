const url = "https://jsonplaceholder.typicode.com/posts/1";

fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById('output').innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
    })
    .catch(error => console.error("Error when fetching data:", error));