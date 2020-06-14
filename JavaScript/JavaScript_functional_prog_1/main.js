const companies=[
{name:"blackand white pvt ",categories:"retail",start:2001,end:2004},
{name:"ship corp pvt ",categories:"finance",start:2005,end:2004},
{name:"millon pvt ",categories:"mining",start:1888,end:2004},
{name:"hbr  pvt ",categories:"bank",start:1992,end:2004},
{name:"rekiance  pvt ",categories:"mining",start:2020,end:2004},
{name:"sugary ind pvt ",categories:"retail",start:2009,end:2004},
{name:"praj ind pvt ",categories:"bank",start:1932,end:2004},

];



const ages=[12,23,12,15,33,22,44,55,34,66,61,98,76];

// //old for loop
// for(var i=0;i<ages.length;i++){
// 	console.log(ages[i]);
// }

// //forEach

// companies.forEach(function(company){

// 	console.log(company.name);
// });

// ages.forEach(function(age){

// 	console.log(age);
// });


// ages.forEach(age=>console.log(age));


// //map

// const newAges=ages.map(function(age){
// 	return age*age;
// });

// console.log(newAges);

// //filter

// filterAges=ages.filter(function(age){
// 	return age>50;
// });

// console.log(filterAges);

// let ages1=[];
// let ages2=[];

// ages1=ages.map(function(age){
// 	return age*2;
// }).filter(function(age){
// 	return age>60;
// });

// console.log(ages1);

// //chained function calls

// ages2=ages
// .map(age=>age*2)
// .filter(age=>age>60);

// console.log(ages2)


//sort 

let sortedcompanies=companies.sort(function(c1,c2){
	return c1.start-c2.start;
});

console.log(sortedcompanies);



//reduce i.e. sum 
const totalage=ages.reduce(function(total,age){
	return total+age;
},0);

console.log(totalage)

const ageSum=ages.reduce((total,age)=>total+age,0);

console.log(ageSum);