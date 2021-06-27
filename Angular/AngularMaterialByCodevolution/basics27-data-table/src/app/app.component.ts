import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics27-data-table';

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
  displayColumns1:string[]=['name','gender','age','address'];
}


export interface Employee{
  name:string;
  gender:string;
  age:number;
  address:string;
}
