import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div> 
              {{title}}
             </div>`,
  styles: [`div{ 
                color:red
              }`]
})
export class AppComponent {
  title = 'this is simple title';
}
