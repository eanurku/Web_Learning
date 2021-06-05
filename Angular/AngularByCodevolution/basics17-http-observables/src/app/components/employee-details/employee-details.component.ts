import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employees=[];
  errorMessage='';

  constructor(private _employeeService:EmployeeService) { 

  }

  ngOnInit(): void {

   this._employeeService.getEmployee2().subscribe(data=>{
     this.employees=data;
   },
   error=>{
      this.errorMessage=error;
   }
   
   );
  }
}
