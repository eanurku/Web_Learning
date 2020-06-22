import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Todo} from '../models/Todo'
import { Observable } from 'rxjs';


const httpOptions={
  headers:new HttpHeaders({
    "Content-type":"application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  todosUrl:string="https://jsonplaceholder.typicode.com/todos";
  todoslimit:string="?_limit=10";
  

  constructor(private http:HttpClient) { }

  getTodos(): Observable<Todo[]> {

    return this.http.get<Todo[]>(`${this.todosUrl}${this.todoslimit}`);

  }

  toggleCompleted(todo:Todo):Observable<any>{
    

    let url=`${this.todosUrl}/${todo.id}`;
    return this.http.put<any>(url,todo,httpOptions);
  }

  deleteCompleted(todo:Todo):Observable<Todo>{

    let url=`${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url,httpOptions);
  }
  addTodo(todo:Todo):Observable<Todo>{
    
    return this.http.post<Todo>(this.todosUrl,todo,httpOptions);
  }


}
