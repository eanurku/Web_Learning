import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem: Todo;

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  //set css classes on the fly
  setClasses() {
 
    let classes = {
      'is-completed': this.todoItem.completed
    };
    return classes;
  }
  //on checkbox toggle operation
  onToggle(todoItem:Todo){

    //toggle in ui
    this.todoItem.completed=!todoItem.completed;
    //toggle in backend
    this.todoService.updateTodos(todoItem).subscribe(todoitemdata =>{
      console.log(todoitemdata);
      
    });

    
  }

  onDelete(todoItem:Todo){
    //to do
  }

}
