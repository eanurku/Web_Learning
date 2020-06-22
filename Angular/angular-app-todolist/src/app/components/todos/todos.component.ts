import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todo';
import {TodoService} from '../../services/todo.service'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  constructor(private todoService:TodoService) {
    // console.log("TodosComponent constructor... ");
   }

  ngOnInit(): void {
    //console.log("TodosComponent ngOnInit()... ");
  
    this.todoService.getTodos().subscribe(todos=>{
        this.todos =todos;
    });
  }

  deleteTodo(todo:Todo){
    //delete from ui
    this.todos=this.todos.filter(currentTodo =>currentTodo.id !==todo.id);
    //delete from server
    this.todoService.deleteCompleted(todo).subscribe(resp=>{
      console.log(resp);
    });
    
  }

  addTodo(todo:Todo){
    this.todoService.addTodo(todo).subscribe(todoResponse=>{
      this.todos.push(todoResponse);
    });


  console.log(todo);
  }
}
