import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employees=[];
  constructor(private _employeeService:EmployeeService) { 
    this.employees=this._employeeService.getEmployees();
  }

  ngOnInit(): void {
  }

}
