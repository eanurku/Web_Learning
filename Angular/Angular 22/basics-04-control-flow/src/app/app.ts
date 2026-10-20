import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('basics-04-control-flow');

  toggle:boolean=false;
  status:string='new';
  cities:string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];


  onToggle() {

    console.log("toggle clicked ");
    this.toggle=!this.toggle;

  }
}
