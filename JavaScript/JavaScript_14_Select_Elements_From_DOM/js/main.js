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

// const x=10;
// const y="10";

// if(x==y){
// 	console.log(`x==y`);

// }
// else{
// 	console.log(`x!=y`)
// }


// if(x===y){
// 	console.log(`x===y`);

// }
// else{
// 	console.log(`x!===y`)
// }

// if(x<10 && y>10){
// 	console.log(`x<10 and y>10`);
// }else{
// 	console.log(`x==10 || y==10`)
// }

// const color=x==10?'black':'blue';

// console.log(color);



// switch (color) {
// 	case 'black':
// 		console.log(`this is black`);
// 		break;
// 	case 'blue':
// 		console.log(`this is blue color`);
// 		break;
// 	default:
// 		console.log(`this is default color`);
// 		break;
// }

//function

// function addNums1(num1=0,num2=0){
// 	return num1+num2;

// };

// console.log(addNums1());
// console.log(addNums1(1));
// console.log(addNums1(12,13));



// const addNums2=(num1=0,num2=0) => {
// 	return num1+num2;

// };

// const addNums3=(num1,num2) => num1+num2;

// const newNum=num1 => num1*2;


// console.log(addNums2(1,2));
// console.log(addNums3(1,2));
// console.log(newNum(12));


// todoList=[
// {	id:1,
// 	text:"some 3"

// },
// {
// 	id:1,
// 	text:"some 3"

// },
// {
// 	id:1,
// 	text:"some 3"
// }
// ];


// todoList.forEach((todo)=>console.log(todo));


//object oriented programming in ES5

// function Person(id,firstname,lastname,age,dob){
// 	this.id=id;
// 	this.firstname=firstname;
// 	this.lastname=lastname;
// 	this.age=age;
// 	this.dob=new Date(dob);
// 	this.getBirthYear=function(){
// 		return this.dob;
// 	}
// 	this.getFullName=()=>`${this.firstname} ${this.lastname}`
// }



// Person.prototype.getBirthDay = function(){
// 	return this.dob; 
// };
// const person1=new Person(1,"gonu","kumar",21,'1990/05/12');
// const person2=new Person(2,"zonu","kumar",23,"1993/09/08");

// console.log(person1);
// console.log(person2);

// console.log(person1.getBirthYear());
// console.log(person2.getFullName());

// console.log(person1.getBirthDay());


// //object oriented programming ES6 

// class Employee{

// 	constructor(eid,efirstname,elastname,eage,edob){
// 	this.eid=eid;
// 	this.efirstname=efirstname;
// 	this.elastname=elastname;
// 	this.eage=eage;
// 	this.edob=new Date(edob);
// 	}

// 	getbirthYear(){
// 		return this.edob;
// 	}

// 	getFullName(){
// 		return `${this.efirstname} ${this.elastname}`;
// 	}
// };



// const employee=new Employee(3,"konu","kumar",23,"1995/09/08");
// console.log(employee);
// console.log("employee:"+employee.getFullName());

//window object in DOM
//console.log(window);
//window.alert("alert message");

//single element selection

const form=document.getElementById("my-form");
const container=document.querySelector(".container");
const firsth1=document.querySelector("h1");
console.log(form);
console.log(container);
console.log(firsth1);

//multiple element selection

console.log(document.querySelectorAll(".item"));
console.log(document.getElementsByClassName("item"));
console.log(document.getElementsByTagName("li"));



const itemsList = document.querySelectorAll(".item");
itemsList.forEach((item)=>console.log(item));



























































































