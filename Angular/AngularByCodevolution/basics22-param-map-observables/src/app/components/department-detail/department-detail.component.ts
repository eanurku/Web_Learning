import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId:number;

  constructor(private route:ActivatedRoute,private router:Router) { 
    // this.departmentId=parseInt(this.route.snapshot.paramMap.get("id"));
    this.route.paramMap.subscribe(paramMap=>{
      let id=paramMap.get("id");
      this.departmentId=parseInt(id);
    });

  }

  ngOnInit(): void {

  }

  getPrevious(){

    let previousId=this.departmentId-1;
    this.router.navigate(["/departments",previousId]);


  }

  getNext(){
    let nextId=this.departmentId+1;
    this.router.navigate(["/departments",nextId]);
  }

}
