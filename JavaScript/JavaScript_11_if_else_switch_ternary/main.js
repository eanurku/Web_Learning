// alert('hi bro');

// console.log("this is a log message");
// console.error("this is an error");
// console.warn("this is a warning");


//var,let const

//error as not assigned value
// const address;

// const name='abc';
// const age=28;
// const isRight=true;

// //it an error to reassign const value
// //console name="xyz";

// console.log(name);
// console.log(age);
// console.log(isRight);


// let score;

// console.log(score);

// score=4;
// console.log(score);


//String,Numbers,Boolean,null,undefined,Symbol

// const name="anu";
// const age=32;
// const rating=3.45;
// const isBoolean=true;
// const isNull=null;
// const isUndefined=undefined;


// let score;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isBoolean);
// console.log(typeof isNull);//output is object but it should be null
// console.log(typeof isUndefined);
// console.log(typeof score);


//String concatenation
// const name="anu";
// const age=28;

// console.log("hello "+name+ ", "+age);

// Template String

// console.log(`Hello ${name}, ${age}`);


// //String methods


// const string="this is a string";


// console.log(string.length);

// console.log(string.toUpperCase());
// console.log(string.toLowerCase());
// console.log(string.substring(0, 4).toUpperCase())
// console.log(string.split(""));
// console.log(string.split(" ",2));

// const string1="this, is, not,good";
// console.log(string1.split(","))


//Arrays

// const array= new Array(1,2,3,4)
// console.log(array);


// const fruits=[1,2,3,"first",true];
// console.log(fruits);


// fruits[5]="anu";



// fruits.push(12);
// fruits.push(13);
// fruits.unshift(-12);
// fruits.pop();
// console.log(fruits);

// console.log(Array.isArray(fruits));
// console.log(Array.isArray("hello"));
// console.log(fruits.indexOf("first"));


//Object literal

// const person = {

// 	firstname:"gonu",
// 	lastname:"singh",
// 	age:28,
// 	hobbies:["TT","tennis","cricket"],
// 	address:{
// 		street:"cp,north street no 11",
// 		city:"saket",
// 		state:"delhi"

// 	}
// }

// console.log(person);
// console.log(person.age);
// console.log(`i am ${person.firstname} ${person.lastname}`);
// console.log(person.address.city);
// console.log(person.hobbies[1]);

// const {firstname,lastname,address,address:{city}}=person;

// console.log(firstname+" "+lastname);
// console.log(address);
// console.log(city);

// //adding property to object
// person.email="myemail@com";


// console.log(person);
// console.log(person.email);

//Array of Objects


// const todolist=[
// 	{
// 		id:1,
// 		isCompleted:true,
// 		text:"text 1"
// 	},
// 	{
// 		id:2,
// 		isCompleted:true,
// 		text:"text 2"
// 	},
// 	{
// 		id:3,
// 		isCompleted:false,
// 		text:"text 3"
// 	}
// ];

// console.log(todolist);
// console.log(todolist.length);
// console.log(todolist[1].text);


// const json=JSON.stringify(todolist);
// console.log(json);

// //for loop

// for (let i = 0; i < todolist.length; i++) {
// 	console.log(`${i} :${todolist[i].text}` );
// }

// //while loop
// let i=0;
// while (i<todolist.length) {
// 	console.log(`${i} :${todolist[i].text}` );
// 	i++;
// }


// //enhanced for loop
// for(let todo of todolist){

//  	console.log(todo.text);
// }


//forEach ,map,filter

// const todolist1=[
// 	{
// 		id:1,
// 		isCompleted:true,
// 		text:"text 1"
// 	},
// 	{
// 		id:2,
// 		isCompleted:true,
// 		text:"text 2"
// 	},
// 	{
// 		id:3,
// 		isCompleted:false,
// 		text:"text 3"
// 	}
// ];

// todolist1.forEach(function (todo) {
// 	console.log(todo.id);
// });

// const todotexts=todolist1.map(function(todo){
// 	return  todo.id*2;
// });
// console.log(todotexts);

// const todoCompleted=todolist1.filter(function(todo){
// 	return todo.isCompleted==true;
// }).map(function(todo){

// 	return todo.text;
// });

// console.log(todoCompleted);

//

//if else 

const x=10;
const y="10";

if(x==y){
	console.log(`x==y`);

}
else{
	console.log(`x!=y`)
}


if(x===y){
	console.log(`x===y`);

}
else{
	console.log(`x!===y`)
}

if(x<10 && y>10){
	console.log(`x<10 and y>10`);
}else{
	console.log(`x==10 || y==10`)
}

const color=x==10?'black':'blue';

console.log(color);



switch (color) {
	case 'black':
		console.log(`this is black`);
		break;
	case 'blue':
		console.log(`this is blue color`);
		break;
	default:
		console.log(`this is default color`);
		break;
}
































































