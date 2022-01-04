import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'basics30-datatable-sorting';

  data:Employee[]=[
    {name:'monu',gender:'M',age:21,address:'morabadi'},
    {name:'gonu',gender:'M',age:34,address:'morabadi'},
    {name:'konu',gender:'M',age:21,address:'morabadi'},
    {name:'tonu',gender:'M',age:55,address:'morabadi'},
    {name:'nonu',gender:'M',age:21,address:'morabadi'},
    {name:'chonu',gender:'M',age:11,address:'morabadi'},
    {name:'bhonu',gender:'M',age:21,address:'morabadi'},
    {name:'lonu',gender:'M',age:22,address:'morabadi'},
  ];


sourceData=new MatTableDataSource(this.data);
displayColumns:string[]=['name','gender','age','address'];
displayColumnsData:string[]=['name','gender','age','address'];

@ViewChild(MatSort) sort:MatSort;

ngAfterViewInit(): void {
  this.sourceData.sort=this.sort;
}

}


export interface Employee{
name:string;
gender:string;
age:number;
address:string;
}
