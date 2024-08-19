import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit{

  @Input() todoItem:Todo=new Todo();

  @Output() deleteTodo:EventEmitter<Todo>=new EventEmitter<Todo>();

  constructor(private todoService:TodoService){


  }
  ngOnInit(): void {
   
  }

  onToggle(){
    //on UI
    this.todoItem.completed=!this.todoItem.completed;

    //on server
    this.todoService.toggleCompleted(this.todoItem).subscribe(data=>{
      console.log(data);
    })
  }

  setClasses(){
    let classes={
      'completed':this.todoItem.completed
    }
    return classes;
  }

  onDelete(){

    this.deleteTodo.emit(this.todoItem);

  }

}
