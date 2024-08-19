import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrl: './add-todo-item.component.css'
})
export class AddTodoItemComponent implements OnInit {



  title: string="";

  @Output() addTodo:EventEmitter<Todo>=new EventEmitter<Todo>();

  constructor(private todoService:TodoService){

  }

  ngOnInit(): void {
    
  }


  onSubmit(){


    let todo={
      title:this.title,
      completed:false

    }
    
    this.addTodo.emit(todo);

  }

}
