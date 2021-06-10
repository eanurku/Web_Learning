import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public departmentList=[
    {id:1,name:'Angular'},
    {id:2,name:'java'},
    {id:3,name:'kotlin'},
    {id:4,name:'Lisp'},
    {id:5,name:'cpp'}


  ];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSelect(department){
  this.router.navigate(["/departments",department.id]);
  }

}
