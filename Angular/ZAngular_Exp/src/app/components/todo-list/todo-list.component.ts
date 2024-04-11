import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../../services/todo-service.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  todoList:Todo[]=[];
  error:any;


   constructor(private todoService:TodoServiceService){

   todoService.getTodoList().subscribe(todos=>{
    this.todoList=todos;
   });


   }

   onDelete(todo:Todo){

    console.log(todo)
    this.todoList=this.todoList.filter(e=>e.id!=todo.id);
    this.todoService.doDelete(todo).subscribe(data=>{
      console.log('deleted='+data)
    });
   }
   onAdd(todo:Todo){

    this.todoService.add(todo).subscribe(todo=>{
      console.log(todo);
      this.todoList.unshift(todo);
    }
  )
    
   }

}
