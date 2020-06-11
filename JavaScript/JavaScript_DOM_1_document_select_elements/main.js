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


