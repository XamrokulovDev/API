const url = 'https://jsonplaceholder.typicode.com/posts'
fetch(url)
.then(Response => Response.json())
.then(data => {
    cardApi(data)
})
function cardApi(data){
    data.forEach(element => {
        const card=`
        <h2>${element.id}</h2>
        <h1>${element.title}</h1>
        <p>${element.body}</p>
        `
        document.body.innerHTML += card;
    });
}
