import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{

  todos:Todo[]=[];
  

  constructor(private todoService:TodoService){
    
    
  }
  ngOnInit(): void {
    
   this.todoService.getTodos().subscribe(todos=>{
    this.todos=todos;
   })
  }

  onDelete(todo:any){

    //on ui
    this.todos=this.todos.filter(item=>item.id!=todo.id);

    //on server
    this.todoService.deletetodo(todo).subscribe(data=>{
     //actions;

    });

  }

  onAdd(todo:any){

    this.todos.push(todo);

    this.todoService.addTodo(todo).subscribe();
    console.log(todo)
  }

 


}
