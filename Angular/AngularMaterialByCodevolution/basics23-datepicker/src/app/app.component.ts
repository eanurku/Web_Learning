import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics23-datepicker';
  minDate = new Date();
  maxDate = new Date(2021, 5, 26);



  datepickerFilter(date: Date) {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }


}
