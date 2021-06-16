import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics09-progress-spinner';
  showProgress=false;


  loadData(){
    this.showProgress=true;
    setTimeout(()=>{

      this.showProgress=false;
    },5000);

  }
}
