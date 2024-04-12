let fetch =require('node-fetch')
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(resp=>resp.json())
.then(data=>console.log(data))