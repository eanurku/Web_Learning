import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics28-datatable-row-click-event';

  sourceData:Employee[]=[
    {name:'monu',gender:'M',age:21,address:'morabadi'},
    {name:'gonu',gender:'M',age:21,address:'morabadi'},
    {name:'konu',gender:'M',age:21,address:'morabadi'},
    {name:'tonu',gender:'M',age:21,address:'morabadi'},
    {name:'nonu',gender:'M',age:21,address:'morabadi'},
    {name:'chonu',gender:'M',age:21,address:'morabadi'},
    {name:'bhonu',gender:'M',age:21,address:'morabadi'},
    {name:'lonu',gender:'M',age:21,address:'morabadi'},
  ];

displayColumns:string[]=['name','gender','age','address'];
displayColumnsData:string[]=['name','gender','age'];



onRowClick(row){
  console.log(row);
}
}


export interface Employee{
name:string;
gender:string;
age:number;
address:string;
}