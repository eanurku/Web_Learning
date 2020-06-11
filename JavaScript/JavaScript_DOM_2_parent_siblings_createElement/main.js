// console.dir(document);
// console.log(document);


// console.log(document.URL);
// console.log(document.domain);
// console.log(document.doctype)
// console.log(document.title);
// document.title=123;
// console.log(document.body);
// console.log(document.head);
// console.log(document.all);
// console.log(document.all[22]);
// document.all[8].textContent="hello";

// console.log(document.forms[0]);
// console.log(document.links);

//getElementById

// var mainheader=document.getElementById("main-header");
// console.log(mainheader);
// var headertitle=document.getElementById("header-title");
// headertitle.textContent="textcontent";
// headertitle.innerText="innertext";
// headertitle.innerHTML="<em>i am html</em>";




// //getElementbyClassname

// var title=document.getElementsByClassName("title");
// console.log(title);

// //getElementByTagName

// var h2=document.getElementsByTagName("h2");
// console.log(h2);

// //QuerySelector
// var mainheader1=document.querySelector("#main-header");
// console.log(mainheader1);

// var title=document.querySelector(".title");
// console.log(title);

// //QuerySelectorAll

// var title1=document.querySelectorAll(".title");
// console.log(title1);



//fetching child elements

// var items=document.querySelector(".items");
// console.log(items);

// items.firstElementChild.style.backgroundColor = 'red';
// items.lastElementChild.style.backgroundColor = 'blue'
// items.children[1].style.background  = 'yellow ';





//loop over elements

// var items=document.querySelectorAll(".item");
// console.log(items);


// for(var i=0;i<items.length;i++){
// 	if(i%2){
//        items[i].style.backgroundColor='#ccc';
// 	}else{
// 		items[i].style.backgroundColor='#555';
// 	}

// }

//  var odditems=document.querySelectorAll("li:nth-child(odd)");
//  var evenitems=document.querySelectorAll("li:nth-child(even)");
//  for(var i=0;i<odditems.length;i++){
//  	odditems[i].style.background = 'red';
//  	evenitems[i].style.background = 'green';
//  }


//parentNode

var ul=document.querySelector(".items");
console.log(ul.parentNode);

console.log(ul.parentNode.parentNode.parentNode.parentNode.parentNode);

//parentElement
var ul=document.querySelector(".items");
console.log(ul.parentElement);
ul.parentElement.style.background  = '#ccc';

//sibling
var ul=document.querySelector(".items");
console.log(ul.nextSibling);
console.log(ul.nextElementSibling);

console.log(ul.previousSibling);
console.log(ul.previousElementSibling);

//children
var ul=document.querySelector(".items");

console.log(ul.childNodes);
console.log(ul.childNodes[0]);

console.log(ul.children);
console.log(ul.children[0]);

//firstchild lastchild
var ul=document.querySelector(".items");
console.log(ul.firstChild);
console.log(ul.firstElementChild);

console.log(ul.lastChild);
console.log(ul.lastElementChild);

//create element
var li=document.createElement("li");
console.log(li);

//add a class
li.className="addclass";
console.log(li);

//add id
li.id="addid";
console.log(li);

//add text content
var textnode=document.createTextNode("add text");
li.appendChild(textnode);
console.log(li.textContent);


//insert a element in DOM or in html document

var newh1=document.createElement("h1");
newh1.textContent="this is newly inserted h1";

var container=document.querySelector("#main .container");
var span=document.querySelector("#span1");


container.insertBefore(newh1,span)


console.log(container);





