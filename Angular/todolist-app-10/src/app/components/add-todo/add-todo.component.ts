import { Component, EventEmitter, OnInit } from '@angular/core';
import {Todo} from '../../models/Todo'
import {Output} from '@angular/core'

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title:string;
  @Output() addEvent=new EventEmitter<Todo>(); 

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    let todo ={
      title:this.title,
      completed:false,
      id:null
    }

    this.addEvent.emit(todo);
  }

}
