import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {


  public selectedId:number;

  public departmentList=[
    {id:1,name:'Angular'},
    {id:2,name:'java'},
    {id:3,name:'kotlin'},
    {id:4,name:'Lisp'},
    {id:5,name:'cpp'}


  ];
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(map=>{
      this.selectedId=parseInt(map.get("id"));
       
    });
  }
  onSelect(department){
    this.router.navigate([department.id],{relativeTo:this.route});
    }
}
