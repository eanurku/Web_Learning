import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Output() childEvent =new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  
  fireEvent(){

    console.log("clicked");
    this.childEvent.emit("Emitting from Child component");
  }

}
