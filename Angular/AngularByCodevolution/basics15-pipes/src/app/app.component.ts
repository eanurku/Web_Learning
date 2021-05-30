import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'welcome to angular';
  date=new Date();
   person={
    name:'john',
    id:123
  };
}
