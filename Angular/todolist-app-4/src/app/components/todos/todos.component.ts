import { Component, OnInit } from '@angular/core';
import{ Todo } from '../../models/Todo'; 

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  
  constructor() { }

  ngOnInit(): void {

    this.todos=[
      {
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      },
      {
        "id": 4,
        "title": "et porro tempora",
        "completed": true
      }];

  }

}
