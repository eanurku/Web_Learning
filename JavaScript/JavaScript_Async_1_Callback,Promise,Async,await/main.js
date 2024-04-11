const posts=[
{title:"post 1",body:"post body 1"},
{title:"post 2",body:"post body 2"},
{title:"post 3",body:"post body 3"},
{title:"post 4",body:"post body 4"},
];

// //async problem 
// function getPosts(){

// 	setTimeout(function(){
// 		let output="";

// 		posts.forEach(post=>{
// 			output+="<h2>"+
// 			post.title +
// 			"</h2>";

// 		});

// 		document.querySelector(".output").innerHTML=output;
// 	},2000);



// };




// function createPost(post){
// 	setTimeout(function(){
// 		posts.push(post);
// 		console.log(posts);


// 	},4000);


// }

// getPosts();
// createPost({title:"post 5",body:"post body 5"});

// //async problem solution  by using callback
// function getPosts(){

// 	setTimeout(function(){
// 		let output="";

// 		posts.forEach(post=>{
// 			output+="<h2>"+
// 			post.title +
// 			"</h2>";

// 		});

// 		document.querySelector(".output").innerHTML=output;
// 	},2000);



// };




// function createPost(post,callback){
// 	setTimeout(function(){
// 		posts.push(post);
// 		console.log(posts);
// 		callback();

// 	},4000);


// }

// createPost({title:"post 5",body:"post body 5"},
// getPosts);


//Async solution by promise

function getPosts(){

	setTimeout(function(){
		let output="";

		posts.forEach(post=>{
			output+="<li>"+
			post.title +
			"</li>";

		});

		document.querySelector(".output").innerHTML=output;
	},2000);
};

function createPostMain1(post){

	return new Promise((resolve,reject)=>{

		setTimeout(()=>{
			posts.push(post);

		});
		let error=false;
		if(!error){
			resolve();
		}else{
			reject("error occured");
		}

	});
};
createPostMain1({title:"test title",body:"test body"})
.then(getPosts);


// //error in promise

// function getPosts(){

// 	setTimeout(function(){
// 		let output="";

// 		posts.forEach(post=>{
// 			output+="<li>"+
// 			post.title +
// 			"</li>";

// 		});

// 		document.querySelector(".output").innerHTML=output;
// 	},2000);
// };
// function createPostMain2(post){

// 	return new Promise((resolve,reject)=>{

// 		setTimeout(()=>{
// 			posts.push(post);

// 			let error=true;
// 			if(!error){
// 				resolve();
// 			}else{
// 				reject("error occured!!!");
// 			}

// 		});


// 	});
// };



// createPostMain2({title:"error title",body:"test body"})
// .then(getPosts)
// .catch(err=>console.log(err));


//promise all method

// const promise1=10;
// const promise2=Promise.resolve("hello shan");
// const promise3=new Promise((resolve,reject)=>{
// 	setTimeout(resolve, 2000, "By Bye")
// });
// //const promise4=fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());//To DO


// Promise.all([promise1,promise2,promise3]).then(values=> console.log(values));


////Async / Await based solution


// async function doPosts(){

// 	await createPostMain({title:"my title",body:"test body"});

// 	getPosts();
// }


// function getPosts(){

// 	setTimeout(function(){
// 		let output="";

// 		posts.forEach(post=>{
// 			output+="<li>"+
// 			post.title +
// 			"</li>";

// 		});

// 		document.querySelector(".output").innerHTML=output;
// 	},1000);
// };
// function createPostMain(post){

// 	return new Promise((resolve,reject)=>{

// 		setTimeout(()=>{
// 			posts.push(post);

// 			let error=false;
// 			if(!error){
// 				resolve();
// 			}else{
// 				reject("error occured!!!");
// 			}

// 		});


// 	});
// };

// doPosts();


//Async/await with promise

// async function getUsers(){
// 	const users=await fetch("https://jsonplaceholder.typicode.com/users");

// 	const data =await users.json();

// 	console.log(data);
// }

// getUsers();