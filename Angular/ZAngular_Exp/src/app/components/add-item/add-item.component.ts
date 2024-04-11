import { Component, EventEmitter, Output } from '@angular/core';
import { TodoServiceService } from '../../services/todo-service.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {


  title:string='';
  @Output() addEvent=new EventEmitter<Todo>();

  constructor(private todoService:TodoServiceService){

  }


  onSubmit(){

  const todo:Todo={title:this.title,completed:false};
  this.addEvent.emit(todo);

    
  }

}
