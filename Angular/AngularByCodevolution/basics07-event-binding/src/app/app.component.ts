import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
  <button (click)="onClick1()">Greet</button>{{greeting}}

  <button (click)="onClick2($event)">Greet</button>{{greeting}}
  <button (click)="greeting='welcome inline '">Greet</button>{{greeting}}
  <button (click)="greeting=$event.type">Greet</button>{{greeting}}
  `,
  styles: ['']
})
export class AppComponent {
  title = 'basics07-event-binding';
  greeting='';

  onClick1(){
    console.log("click done1");
    this.greeting="welcome Guest 1";
  }
  onClick2(event:Event){
    console.log("click done2");
    this.greeting=event.type+" event type";
  }
}
