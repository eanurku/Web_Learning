import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `

  <h2 [style.color]="'blue'">style 1</h2>
  <h2 [style.color]="successColor">style 1</h2>
  <h2 [style.color]="hasError?'red':'green'">style 2</h2>
  <h2 [ngStyle]="mystyles">style 2</h2>
  `,
  styles: [`

  `]
})
export class TestComponent implements OnInit {

  successColor="green";
  hasError=true;
  mystyles = {
    color : 'orange',
    "font-style" :'italic'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
