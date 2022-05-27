// let readline=require('readline').createInterface({
//     input: process.stdin,
//     output : process.stdout,
// })

// readline.question(`what is your name?`,name=>{
//     outFunc(name)
//     readline.close()
// })
// let outFunc=(name)=>{
//     console.log(`Hi ${name}`+name);
// }

const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?",
  },
];

inquirer.prompt(questions).then(answers => {
  console.log(`Hi ${answers.name}!`);
});



  