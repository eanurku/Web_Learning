import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';

const httpOptions={
  headers : new HttpHeaders(

    'Content-Type:application/json'
  )
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosurl='https://jsonplaceholder.typicode.com/todos';
  todosLimit='?_limit=5'
  constructor(private httpClient:HttpClient) { }

  getTodos():Observable<Todo[]>{ 

    return this.httpClient.get<Todo[]>(this.todosurl+this.todosLimit);

  }
  updateTodo(todo:Todo):Observable<any>{

    const url=`${this.todosurl}/${todo.id}`;
    return this.httpClient.put(url,todo,httpOptions);
  }
  deleteTodo(todo:Todo):Observable<any>{

    const url=`${this.todosurl}/${todo.id}`;
    return this.httpClient.delete(url,httpOptions);

  }
}
