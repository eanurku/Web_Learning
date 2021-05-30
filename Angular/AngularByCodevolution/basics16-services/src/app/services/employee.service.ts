import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [{ id: 1, name: "anurag", address: "hyderabad" },
    { id: 2, name: "monu", address: "patna" },
    { id: 3, name: "gonu", address: "ranchi" }
    ];
  }
}
