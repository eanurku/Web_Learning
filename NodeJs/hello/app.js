require('dotenv').config()

var msg='hello world!!';
var path=process.env.PATH;
console.log(msg);
console.log(path);
console.log(process.env.USER_NAME);
console.log(process.env.USER_KEY);

var args=require('minimist') (process.argv.slice(2));
console.log(args.name);


const x = 1
const y = 2
const z = 3
console.count(
  'The value of x is ' + x + 
  ' and has been checked .. how many times?'
)
console.count(
  'The value of x is ' + y + 
  ' and has been checked .. how many times?'
)
console.count(
  'The value of x is ' + z + 
  ' and has been checked .. how many times?'
)