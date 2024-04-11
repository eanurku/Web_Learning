// alert('pop up');

// console.log('this is log file');
// console.warn('this is log file');
// console.error('this is log file');

// const score=2;
// const name="truth";

// console.log(score);
// console.log(name);

// //score=4;


// console.log(score);

// let age=23;
// console.log(age);

// age=34;
// console.log(age);

// const str="this is a sample string";
// console.log(str.length);
// console.log(str.split(' ',2));
// console.log(str.substring(0,4))

// const list=[];
// list.push('abc');
// list.push('its not');
// list.push('23');
// console.log(list.indexOf('23'));


// const list2=new Array(1,2,3,4,5,'anu');

// console.log(list2);
// list2[1]='anurag';
// console.log(list2);

// const person={
//     name:'anurag',
//     address:'sampur'
// };
// console.log(person);

// person.email='anu@gmail.com'
// console.log(person);


// const json=JSON.stringify(person);
// console.log(json);


// const todolist=[
//     {id:1,name:'text1'},
//     {id:2,name:'text1'},
//     {id:3,name:'text1'},
// ]


// for(let todo of todolist){

//     console.log(`this is ${todo.id}`);
// }


// todolist.forEach(function(todo){

//     console.log(todo);
// });

// const idList=todolist.map(todo=>todo.id);
// console.log(idList);
// const filList=todolist.filter(todo=>todo.id==1);
// console.log(filList);


// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(res=>res.json())
// .then(data=>console.log(data))

// function Person(id,name){

//     this.id=id;
//     this.name=name;
//     this.getName=function(){
//         return this.name;
//     }

    

// }

// Person.prototype.getid=function(){
//     return this.id;
// }

// const person=new Person(12,'anu');
// console.log(person);
// console.log(person.getid());


// class Employee{

//     constructor(id,name){
//         this.id=id;
//         this.name=name;

//     }

//     getName(){
//         return this.name;
//     }

//     getDetails(){
//         return `this is ${this.id} and i am ${this.name}`;
//     }
// }

// const emp=new Employee(123,'anurag');
// console.log(emp);
// console.log(emp.getDetails());

// const ele=document.querySelector('.bodyclass');
// console.log(ele);
// document.createElement(createpa)

// const btn=document.querySelector('.btn');
// console.log(btn);

// btn.addEventListener('click',()=>{
//     console.log('button is clicked');

//     btn.innerHTML='you clicked';
//     btn.style.color='red';
// });

const posts=[
    {title:'title 1',body:'body 1'},
    {title:'title 2',body:'body 2'},
    {title:'title 3',body:'body 3'},
    {title:'title 4',body:'body 4'}
];

 function getPosts(){

    setTimeout(()=>{
        let output='';
        posts.forEach(post=>{
            output+=post.title+'\n';
        })
    
        console.log('fuck off loading...');
        document.querySelector('.output').innerHTML=output;
    },4000)
  
}
function createpost(post){

        setTimeout(()=>{
            posts.push(post);
        },3000);

}

async function dopost(){
    await createpost({title:"fferfer",body:"ewdew"});
    getPosts();
}

dopost();
