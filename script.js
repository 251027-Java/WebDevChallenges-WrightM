const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
    .then(response => response.json())
    .then(posts => {
        posts.slice(0, 5).forEach(post => {
        const item = document.createElement('div');
        item.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
        document.body.appendChild(item);
    })})
    .catch(error => console.error("Error when fetching data:", error));