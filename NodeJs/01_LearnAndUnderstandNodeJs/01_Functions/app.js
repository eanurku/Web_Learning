//sample function
function greet(){
    console.log("greet from a function");
}
greet();

//first class function
var greetVar=greet;
greetVar();

//function expression
var greetme=function () {
    console.log("test a func expression");
}
greetme();


//function as params

var greetv1=function(func){
    func();
}

