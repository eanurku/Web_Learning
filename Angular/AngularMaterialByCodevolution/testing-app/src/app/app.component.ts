import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from "@angular/material/table";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AppComponent implements AfterViewInit {
  title = 'testing-app';

  @ViewChild(MatSort, {static: false}) private sort: MatSort;
  employeeData: Employee[] = [
    {name: 'monu', gender: 'M', age: 21, address: 'morabadi'},
    {name: 'gonu', gender: 'M', age: 21, address: 'morabadi'},
    {name: 'konu', gender: 'M', age: 21, address: 'morabadi'},
    {name: 'tonu', gender: 'M', age: 21, address: 'morabadi'},
    {name: 'nonu', gender: 'M', age: 21, address: 'morabadi'},
    {name: 'chonu', gender: 'M', age: 21, address: 'morabadi'},
    {name: 'bhonu', gender: 'M', age: 21, address: 'morabadi'},
    {name: 'lonu', gender: 'M', age: 21, address: 'morabadi'},
  ];
  EmployeeColumns: string[] = ['expandedIntern','name', 'gender', 'age', 'address'];
  EmployeeColumnsData: string[] = ['expandedIntern','name', 'gender', 'age', 'address'];
  employeeDataSource = new MatTableDataSource<Employee>(this.employeeData);

  internData: Intern[] = [
    {name: "anu", id: "123"},
    {name: "monu", id: "124"},
    {name: "gonu", id: "143"}
  ]
  internColumns:string[]=['name','id'];
  internDataSource = new MatTableDataSource<Intern>(this.internData);
  expand: boolean=false;
  expandedElement: any;


  ngAfterViewInit(): void {
    console.log("employee sort--->");
    console.log(this.sort);
    this.employeeDataSource.sort = this.sort;
    console.log("<------employee sort");
  }

  displayInterns($event: MouseEvent) {
    this.expand=!this.expand;

  }
  expandMethod(){
    return this.expand;
  }
}


export interface Employee {
  name: string;
  gender: string;
  age: number;
  address: string;
}

export interface Intern {
  name: string;
  id: String;
}
