
import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {



   httpoptions={
   headers:new HttpHeaders({
    'Content-Type':'application/json'
   })
  }


  todosUrl:string="https://jsonplaceholder.typicode.com/todos";
  todoLimit:string="?_limit=10"


  constructor(private http:HttpClient) { }


  getTodos():Observable<any>{
    return  this.http.get(`${this.todosUrl}${this.todoLimit}`);
  }

  toggleCompleted(todo: Todo) {
    return this.http.put(`${this.todosUrl}/${todo.id}`,todo,this.httpoptions)
   }

   deletetodo(todo:Todo) {
    return this.http.delete(`${this.todosUrl}/${todo.id}`);
  }

  addTodo(todo: any) {
   return this.http.post(this.todosUrl,todo,this.httpoptions);
  }

  
}
