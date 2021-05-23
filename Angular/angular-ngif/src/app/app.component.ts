import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ngif';
  isChecked:boolean;



  onChange(){
    this.isChecked=!this.isChecked;
  }
}
