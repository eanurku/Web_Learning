import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import{ Todo } from '../../models/Todo'; 

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  
  
  constructor(private  todoService:TodoService) {
    
   }

  ngOnInit(): void {

  this.todoService.getTodos().subscribe(todosData=>{
    this.todos=todosData;
  });
  }

  onDelete(todo:Todo){
    //remove from ui
    this.todos=this.todos.filter(t=>t.id!=todo.id);
    //remove from backend
    this.todoService.deleteTodo(todo).subscribe(deletedData=>{
      console.log("deleted");
    });
  }

}
