import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <input [(ngModel)]="inputBoxValue" type='text' >{{inputBoxValue}}
  
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'basics09-two-way-binding';
  inputBoxValue:string='';
}
