import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics14-output-decorator';

  message:string='';

  onChildEvent(childData:string){

    this.message=childData;
    console.log(childData);
  }
}
