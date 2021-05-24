import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <!--old classic way-->
  <h2 class="text-success">lets test</h2>
  <!--class binding-->

  <h2 [class]="successClass">lets test</h2>
  <h2 [class.text-success]="!hasError">lets test</h2>
  <h2 [ngClass]="messageClass">lets test</h2>

  <h2 class="text-danger" [class]="successClass">lets test</h2>

  `,
  styles: [`
  .text-success{
    color:green
  }
  .text-danger{
    color:red
  }
  .text-special{
    font-style:italic;
  }
  
  
  `]
})
export class TestComponent implements OnInit {

  successClass="text-success";
  hasError=false;
  messageClass = {
    "text-success" :!this.hasError,
    "text-danger" :this.hasError,
    "text-special" :true

  };

  constructor() { }

  ngOnInit(): void {
  }

}
