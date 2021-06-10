import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public departmentlist=[
    {id:1,name:'Angular'},
    {id:2,name:'Html'},
    {id:3,name:'CSS'},
    {id:4,name:'React'},
    {id:5,name:'RxJs'}
  ];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSelect(department:any){
    this.router.navigate(["/departments",department.id]);
  }

}
