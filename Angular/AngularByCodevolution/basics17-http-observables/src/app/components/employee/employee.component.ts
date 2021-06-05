import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  employees=[];
  errorMessage='';

  constructor(private _employeeService:EmployeeService) { 

  }

  ngOnInit(): void {

   this._employeeService.getEmployee().subscribe(data=>{
     this.employees=data;
   },
   error=>{
      this.errorMessage=error;
   }
   
   );
  }

}
