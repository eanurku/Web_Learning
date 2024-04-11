import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoServiceService } from '../../services/todo-service.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {

  @Input() todoItem:any;
  toggle=false;

  @Output() delEvent=new EventEmitter<any>();


  constructor(private todoService:TodoServiceService){

  }
  onToggle(){
    this.todoItem.completed=!this.todoItem.completed;
    this.todoService.toggleCompleted(this.todoItem).subscribe(data=>{
      console.log(data);
    });

  }


  getClassList(){
   
    let classList={'completed':this.todoItem.completed}
    return classList;
  }

  onDelete(){
    console.log(this.todoItem);
    this.delEvent.emit(this.todoItem);
    
  }
}
