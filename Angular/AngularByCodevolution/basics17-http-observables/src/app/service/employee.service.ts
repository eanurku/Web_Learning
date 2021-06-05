import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IEmployee } from '../models/IEmployee';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService{

  public _url:string="/assets/employee.json";
  public _url2:string="/assets/employee1.json";
  constructor(private http:HttpClient) { }

  getEmployee():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url).pipe(catchError(this.errorHandler))
            
  }
  getEmployee2():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url2).pipe(catchError(this.errorHandler))
            
  }
  errorHandler(error:HttpErrorResponse){
    return  throwError(error.message||"server error")
  }
}
