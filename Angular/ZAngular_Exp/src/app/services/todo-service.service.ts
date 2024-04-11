import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {


   httpOptions={
    headers:new HttpHeaders({
      'Content-Type':"application/json"
    })
  };
  todosUrl:string='https://jsonplaceholder.typicode.com/todos';
  

  constructor(private http1:HttpClient) { }

  getTodoList(): Observable<any> {


    return this.http1.get(this.todosUrl);
    
  }

  toggleCompleted(todo:Todo):Observable<any>{




    const url=`${this.todosUrl}/${todo.id}`;
    return this.http1.put(url,todo,this.httpOptions);
  }


  doDelete(todo: Todo):Observable<any> {
    const url=`${this.todosUrl}/${todo.id}`;

    return this.http1.delete(url);
  }

  add(todo:Todo):Observable<any>{

    return this.http1.post(this.todosUrl,todo,this.httpOptions);
  }



}
