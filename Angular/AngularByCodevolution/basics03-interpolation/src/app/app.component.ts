import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h2> {{title}}</h2>
  <h2> {{1+2}}</h2>
  <h2> {{title.length}}</h2>
  <h2> {{title.toUpperCase}}</h2>
  <h2> {{title+"Hi"}}</h2>
  <!-- not allowed operations {{}} start-->
  <!-- <h2> {{a=1+3}}</h2>
   <h2> {{window.location.href}}</h2> -->
   <!-- not allowed operations {{}} end-->
   <h2>{{siteUrl}}</h2>
   <h2>{{getUser()}}</h2>

  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'title is interpolation';
  siteUrl=window.location.href;
  myname="abc";

  getUser(){
    return "user :"+ this.myname;
  }
}
