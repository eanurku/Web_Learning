let x='X';
let y='Y'
console.log(x,y);


let fruits=['orange','orange'];
fruits.forEach(fruit=>{
    console.count(fruit);
});
console.countReset('orange')

fruits.forEach(fruit=>{
    console.count(fruit);
});

console.trace()

const doSomething=()=>console.log("this is a log test");
const myfunc=()=>{
    console.time('dosomething time');
    doSomething();
    console.timeEnd('dosomething time')
}
myfunc();

console.log('\x1b[33m%s\x1b[0m', 'hi!');


let chalk=require('chalk');
console.log(chalk.yellow('hi i am yellow'))

let ProgressBar=require('progress');
let bars=new ProgressBar(':elapsed',{total:10})

let timer=setInterval(() => {
    bars.tick();
    if(bars.complete){
        clearInterval(timer)
    }
    
}, 1000);

