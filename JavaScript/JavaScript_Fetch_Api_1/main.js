
// //loading text file

// var textbtn=document.querySelector("#textbtn");

// // textbtn.addEventListener("click", ()=>{

// // 		fetch("sample.txt")
// // 		.then(resp =>  resp.text())
// // 		.then((data)=>console.log(data));


// // });



// textbtn.addEventListener("click", ()=>{

// 		fetch("sample.txt")
// 		.then(resp =>  resp.text())
// 		.then((data)=>{
// 			document.querySelector("#output").innerHTML=data;
// 		});


// })

// //loading json file

// var usersbtn=document.querySelector("#usersbtn");

// usersbtn.addEventListener("click", ()=>{

// 	fetch("users.json")
// 	.then(resp=>resp.json())
// 	.then(data=>{
// 		let output='';

// 		data.forEach(user=>{
// 			output+=`<ul>
// 			<li>${user.id}</li>
// 			<li>${user.name}</li>
// 			<li>${user.address.city}</li>
// 			</ul>`;
// 		});

// 		document.querySelector("#output").innerHTML=output;
// 	});


// })


// // api GET request

// var usersapibtn=document.querySelector("#usersapibtn");

// usersapibtn.addEventListener("click", ()=>{

// 	fetch("https://jsonplaceholder.typicode.com/users")
// 	.then(resp=>resp.json())
// 	.then(data=>{
// 		console.log(data);
// 		let output='';

// 		data.forEach(user=>{
// 			output+=`<ul>
// 			<li>${user.id}</li>
// 			<li>${user.name}</li>
// 			<li>${user.address.city}</li>
// 			</ul>`;
// 		});

// 		document.querySelector("#output").innerHTML=output;
// 	});


// })


//api post

var form=document.querySelector("#addpost");
var title=document.querySelector("#titleid");
var body=document.querySelector("#bodyid");

form.addEventListener("submit", (e)=>{
	e.preventDefault();
	console.log(title.value);
	console.log(body.value)

	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: JSON.stringify({
			title: title.value,
			body: body.value,
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		}
	})
	.then(response => response.json())
	.then(json => console.log(json))





})