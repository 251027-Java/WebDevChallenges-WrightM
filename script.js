const url = "https://jsonplaceholder.typicode.com/posts";

function loadContent() {
    fetch(url)
    .then(response => response.json())
    .then(posts => {
        posts.slice(0, 5).forEach(post => {
        const item = document.createElement('div');
        item.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
        document.body.appendChild(item);
    })})
    .catch(error => console.error("Error when fetching data:", error));
};

document.getElementById("loadContent").addEventListener("click", loadContent);