import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employees=[];

  constructor(private _employeeService:EmployeeService) {
    this.employees=this._employeeService.getEmployees();
   }

  ngOnInit(): void {
  }

}
