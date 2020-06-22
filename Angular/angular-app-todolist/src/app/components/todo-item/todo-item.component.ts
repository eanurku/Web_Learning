import { Component, OnInit , Input,EventEmitter,Output} from '@angular/core';
import {Todo} from '../../models/Todo'
import {TodoService} from '../../services/todo.service'





@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;
  @Output() deleteTodo:EventEmitter<Todo> =new EventEmitter();



  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  setTodoClasses(){

    let classes={
      todo:true,
      'is-completed':this.todo.completed

  };
  return classes;
  }

  onToggle(todo:Todo){
    //toggle on ui
   this.todo.completed=!todo.completed;

   //toggle on server
   this.todoService.toggleCompleted(todo).subscribe(resp=>{
     console.log(resp);
   });

  }
  onDelete(todo:Todo){
  
    this.deleteTodo.emit(todo);
  }


  // setBtnClasses(){

  //   let classes={
  //     del:true,
  //     clear:true

  // };
  // return classes;

  // }
}


