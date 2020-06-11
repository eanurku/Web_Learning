// //string vs Object
// var str1="abc";
// var str2=new String("abc");

// console.log(typeof str1);//output:string
// console.log(typeof str2);//output:object


// //window object methods called directly

// //console.log(alert(1));
// console.log(navigator.appVersion);
// console.log(document);


// //object literal
// var book1={
// 	title:"book 1",
// 	author:"some one",
// 	year:2013,

// 	getAuthorName: function(){
// 		return this.author;

// 	},

// 	getTitle(){
// 		return this.title;
// 	}
// };
// console.log(book1);
// console.log(book1.getAuthorName());


//ES5 Object oriented programming
//----------------------------------------
// function constructor 
// function Book(){
// 	console.log("creating book...");
// }


// var book1=new Book();

// // constructor
// function Book(title,author,year){

// 	this.title=title;
// 	this.author=author;
// 	this.year=year;

// 	this.getAuthor=function(){
// 		return this.author;
// 	}

// }

// //add method in prototype
// Book.prototype.getTitle = function(){
// 	return this.title;
// };



// var book=new Book("physics","hcverma","2008");
// console.log(book);
// console.log(book.getAuthor());
// console.log(book.getTitle());



// //inherit another constructor
// function Magazine (title,author,year,month){
// 	Book.call(this,title,author,year,);
// 	this.month=month;

// 	getMonth=function(){

// 		return this.month;

// 	}
// }

// //inherit prototype
// Magazine.prototype=Object.create(Book.prototype);

// var mag1=new Magazine("science","mtg","2008","july");


// //use parent construct 
// Magazine.prototype.constructor=Magazine;
// console.log(mag1);
// console.log(mag1.getAuthor());
// console.log(mag1.getTitle());


// //object create method 
// const bookproto= {

// 	getTitle:function(){
// 		return this.title;
// 	},
// 	getAuthor:function(){
// 		return this.author;
// 	}

// };

// const book=Object.create(bookproto);

// book.title="t1";
// book.author="a1";
// console.log(book);

//ES6 object oriented programming
//----------------------------------

//class
class Book{
	constructor(title,author,year){
		this.title=title;
		this.author=author;
		this.year=year;

	}

	getTitle(){
		return this.title;
	}

	getAuthor(){
		return this.author;
	}
	changeyear(year){
		this.year=year;
		this.revised=true;
	}

	static checkBook(){
		console.log("i am checking....")
	}
};

var book=new Book("first book","its me",2011);
console.log(book);

book.changeyear(2015);

console.log(book);

//static method

Book.checkBook();

//inheritance :subclass
class Magazine extends Book{
	constructor(title,author,year,month){
		super(title,author,year);
		this.month=month;
	}

};

var mag2=new Magazine("science1","mtg1","2002","june");
console.log(mag2);
console.log(mag2.getTitle());