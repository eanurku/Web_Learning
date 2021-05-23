import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem: Todo;

  constructor() { }

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

    this.todoItem.completed=!todoItem.completed;
  }

  onDelete(todoItem:Todo){
    //to do
  }

}
