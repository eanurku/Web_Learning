

// var textbtn=document.querySelector("#textbtn");

// //xhr onload
// textbtn.addEventListener("click",()=>{

	
// 	//create xhr object
// 	var xhr=new XMLHttpRequest();
// 	console.log(xhr);

// 	xhr.open("GET", "sample.txt", true);

// 	xhr.onload=function(){

// 		console.log(xhr.readyState);//only 4 will be logged

// 		if(xhr.readyState == 4   && xhr.status==200)
// 		console.log(xhr.responseText);
// 	};

// 	xhr.send();
// });

//ready state values
//0 request not initialized
//1 server conn established
//2 req recvd
//3 processing req
//4 req finished and resp is ready

// //xhr onreadystatechange
// textbtn.addEventListener("click",()=>{

	
// 	//create xhr object
// 	var xhr=new XMLHttpRequest();
// 	console.log(xhr);

// 	xhr.open("GET", "sample.txt", true);

// 	xhr.onprogress=()=>{

// 		console.log("on progress :"+xhr.readyState);

// 	};

// 	xhr.onreadystatechange=()=>{

// 		console.log("onreadystatechange :"+xhr.readyState);


// 		if(xhr.readyState == 4   && xhr.status==200)
// 			console.log(xhr.responseText);
// 	};

// 	xhr.onerror=()=>{
// 		console.log("Request error ....")
// 	};

// 	xhr.send();
// });

// //xhr load on page
// textbtn.addEventListener("click",()=>{

	
// 	//create xhr object
// 	var xhr=new XMLHttpRequest();
// 	console.log(xhr);

// 	xhr.open("GET", "sample.txt", true);


// 	xhr.onload=()=>{



// 		if(xhr.status==200){

// 			console.log(xhr.responseText);
// 				document.querySelector("#textid").innerHTML=xhr.responseText;
// 		}else{
// 				document.querySelector("#textid").innerHTML="404 not found";
// 		}


// 	};
// 	xhr.send();
// });


// //xhr 404 error 
// textbtn.addEventListener("click",()=>{

	
// 	//create xhr object
// 	var xhr=new XMLHttpRequest();
// 	console.log(xhr);

// 	xhr.open("GET", "sample1.txt", true);


// 	xhr.onload=()=>{



// 		if(xhr.status==200){

// 			console.log(xhr.responseText);
// 				document.querySelector("#textid").innerHTML=xhr.responseText;
// 		}else{
// 				document.querySelector("#textid").innerHTML="404 not found";
// 		}


// 	};
// 	xhr.send();
// });

// //get user from  json file , use JSON parse method to convert to object
// var userbtn=document.querySelector("#userbtn");

// userbtn.addEventListener("click",()=>{

	
// 	//create xhr object
// 	var xhr=new XMLHttpRequest();
// 	console.log(xhr);

// 	xhr.open("GET", "user.json", true);


// 	xhr.onload=()=>{


// 		if(xhr.status==200){

// 			let user=JSON.parse( xhr.responseText);

// 			var output="";
// 			output+="<ul>"+
// 			"<li>"+user.id+"</li>"+
// 			"<li>"+user.name+"</li>"+
// 			"<li>"+user.address.city+"</li>"+
// 			"</ul>";

// 			console.log(user.name);
// 			document.querySelector("#textid").innerHTML=output;
// 		}else{
// 			document.querySelector("#textid").innerHTML="404 not found";
// 		}


// 	};
// 	xhr.send();
// });

// //get users 
// var usersbtn=document.querySelector("#usersbtn");
// usersbtn.addEventListener("click",()=>{

	
// 	//create xhr object
// 	var xhr=new XMLHttpRequest();
// 	console.log(xhr);

// 	xhr.open("GET", "users.json", true);


// 	xhr.onload=()=>{


// 		if(xhr.status==200){

// 			var users=JSON.parse( xhr.responseText);

// 			let output="";
// 			users.forEach((user)=>{

// 				output+="<ul>"+
// 				"<li>"+user.id+"</li>"+
// 				"<li>"+user.name+"</li>"+
// 				"<li>"+user.address.city+"</li>"+
// 				"</ul>";
// 			});
			

			
// 			document.querySelector("#textid").innerHTML=output;
// 		}else{
// 			document.querySelector("#textid").innerHTML="404 not found";
// 		}


// 	};
// 	xhr.send();
// });

//external api call, GET request, Response as Json
//get users 
var getapibtn=document.querySelector("#getapibtn");
getapibtn.addEventListener("click",()=>{

	
	//create xhr object
	var xhr=new XMLHttpRequest();
	console.log(xhr);

	xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);


	xhr.onload=()=>{


		if(xhr.status==200){

			var users=JSON.parse( xhr.responseText);

			let output="";
			users.forEach((user)=>{

				output+="<ul>"+
				"<li>"+user.id+"</li>"+
				"<li>"+user.name+"</li>"+
				"<li>"+user.address.city+"</li>"+
				"</ul>";
			});
			

			
			document.querySelector("#textid").innerHTML=output;
		}else{
			document.querySelector("#textid").innerHTML="404 not found";
		}


	};
	xhr.send();
});