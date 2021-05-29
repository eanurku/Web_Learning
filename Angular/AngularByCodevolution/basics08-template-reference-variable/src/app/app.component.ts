import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h2>welcome</h2>

  <input #myInput type="text"/>

  <button (click)="onclick1(myInput.value)">click me</button>{{message}}
  <button (click)="onclick2(myInput)">click me</button>

  <input [(ngModel)]="name1" type="text"/>{{name1}}
  <button (click)="onclick3()">click me2</button>{{printName}}
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics08-template-reference-variable';
  message='';
  name1='';
  printName:any;

  onclick1(value){

    this.message=value;
  }
  onclick2(val){

    console.log(val);
  }

  onclick3(){

    this.printName=this.name1;
  }
}
